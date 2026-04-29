import { useState, useRef, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Upload, Download, PlusCircle, X, CheckCircle2 } from 'lucide-react';
import { TicketData, WeekOption } from './types/ticket';
import { parseDate, getWeeksForMonth, isDateInWeek, isDateInMonth } from './utils/dateUtils';
import { format } from 'date-fns';
import { 
  calculateKPIs, 
  getChannelDistribution, 
  getProductBreakdown, 
  getWeeklyEscalationRate,
  getIssueAnalysis,
  exportToCSV
} from './utils/analytics';
import { KPICards } from './components/KPICards';
import { EscalationTrendChart } from './components/EscalationTrendChart';
import { ChannelDistributionChart } from './components/ChannelDistributionChart';
import { ProductBreakdownChart } from './components/ProductBreakdownChart';
import { IssueAnalysisTable } from './components/IssueAnalysisTable';
import { DetailedSessionsTable } from './components/DetailedSessionsTable';
import { OverviewComparison, MonthOverviewProps } from './components/OverviewComparison';
import fullDataCsvRaw from './data/WAGGLE_AI_FULL_DATA.csv?raw';

const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQmdcr8EaeN04nsRVatF2B0lVYCOpsrvnFoldLpPjuRBXeOcHL1KGCQRbCw62A78cVtxxY2fW246vB/pub?output=csv';

function App() {
  const [allData, setAllData] = useState<TicketData[]>([]);
  const [filteredData, setFilteredData] = useState<TicketData[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedWeek, setSelectedWeek] = useState<string>('all');
  const [weeks, setWeeks] = useState<WeekOption[]>([]);

  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');

  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mergeFileInputRef = useRef<HTMLInputElement>(null);
  const [uploadNotification, setUploadNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Stable ref so handlers always see current allData without stale closure issues
  const allDataRef = useRef<TicketData[]>([]);
  useEffect(() => { allDataRef.current = allData; }, [allData]);

  /** Normalize a date string to DD-MM-YYYY format */
  const normalizeDateString = (raw: string): string => {
    if (!raw) return raw;
    const cleaned = raw.trim();
    // YYYY-MM-DD or YYYY/MM/DD
    const isoMatch = cleaned.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);
    if (isoMatch) {
      const [, year, month, day] = isoMatch;
      return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
    }
    // DD-MM-YYYY or DD/MM/YYYY
    const dmyMatch = cleaned.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);
    if (dmyMatch) {
      const [, day, month, year] = dmyMatch;
      return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
    }
    return cleaned;
  };

  // Sync with Google Sheets and initial Local Data on mount
  useEffect(() => {
    let baseData: TicketData[] = [];

    const syncWithSheets = (currentData: TicketData[]) => {

      Papa.parse(GOOGLE_SHEETS_CSV_URL, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.data && results.data.length > 0) {
            const parsedData: TicketData[] = results.data.map((row: any) => ({
                channel: row.Channel || row.channel || '',
                createdAt: normalizeDateString(row['Created at'] || row.createdAt || row['Created date'] || ''),
                product: row.Product || row.product || '',
                issue: row.Issue || row.issue || '',
                subType: row['Sub Type'] || row.subType || '',
                handled: row.Handled || row.handled || ''
              }));
            
            setAllData(prev => {
              const existingSet = new Set(prev.map(r => 
                `${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`
              ));
              const unique = parsedData.filter(r => 
                !existingSet.has(`${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`)
              );
              return [...prev, ...unique];
            });

            setLastSyncTime(new Date().toLocaleTimeString());
            console.log(`Synced ${parsedData.length} rows from Google Sheets.`);
          }

        },
        error: (error) => {
          console.error('Error syncing with Google Sheets:', error);

        }
      });
    };

    // Parse the embedded raw CSV (WAGGLE_AI_FULL_DATA.csv)

    Papa.parse(fullDataCsvRaw, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        baseData = results.data.map((row: any) => ({
            channel: row.Channel || row.channel || '',
            createdAt: normalizeDateString(row['Created at'] || row.createdAt || row['Created date'] || ''),
            product: row.Product || row.product || '',
            issue: row.Issue || row.issue || '',
            subType: row['Sub Type'] || row.subType || '',
            handled: row.Handled || row.handled || ''
          }));
        
        // Also load from LocalStorage to support manual uploads across reloads
        const existingLocalStr = localStorage.getItem('waggle_manual_data');
        if (existingLocalStr) {
          try {
            const localData = JSON.parse(existingLocalStr);
            if (Array.isArray(localData)) {
              baseData = [...baseData, ...localData];
              console.log(`Loaded ${localData.length} manually uploaded rows from local storage.`);
            }
          } catch (e) {
             console.error('Error parsing local storage data:', e);
          }
        }
        
        setAllData(baseData);


        // After local data is loaded, sync with Google Sheets
        syncWithSheets(baseData);
      }
    });
  }, []);

  // Dynamically extract available months from allData
  const availableMonths = useMemo(() => {
    const monthOrder = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const mSet = new Set<string>(); // "january-2026"
    
    allData.forEach(r => {
      try {
        const d = parseDate(r.createdAt);
        if (!isNaN(d.getTime())) {
          mSet.add(`${format(d, 'MMMM').toLowerCase()}-${d.getFullYear()}`);
        }
      } catch {}
    });

    return Array.from(mSet).sort((a, b) => {
      const [mNameA, mYearA] = a.split('-');
      const [mNameB, mYearB] = b.split('-');
      if (mYearA !== mYearB) return parseInt(mYearA) - parseInt(mYearB);
      return monthOrder.indexOf(mNameA) - monthOrder.indexOf(mNameB);
    });
  }, [allData]);

  useEffect(() => {
    if (selectedMonth && selectedMonth !== 'all') {
      const monthWeeks = getWeeksForMonth(selectedMonth);
      setWeeks(monthWeeks);
    } else {
      setWeeks([]);
    }
    setSelectedWeek('all');
  }, [selectedMonth]);

  useEffect(() => {
    if (allData.length > 0) {
      filterData(selectedMonth, selectedWeek);
    }
  }, [selectedWeek, selectedMonth, allData]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData: TicketData[] = results.data.map((row: any) => ({
          channel: row.Channel || row.channel || '',
          createdAt: normalizeDateString(row['Created at'] || row.createdAt || row['Created date'] || ''),
          product: row.Product || row.product || '',
          issue: row.Issue || row.issue || '',
          subType: row['Sub Type'] || row.subType || '',
          handled: row.Handled || row.handled || ''
        }));
        
        setAllData(parsedData);
        setFilteredData(parsedData);
      }
    });
    event.target.value = '';
  };

  /** Merge-upload: appends new CSV rows to existing data and persists to localStorage */
  const handleMergeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (!results.data.length) {
          setUploadNotification({ type: 'error', message: 'The CSV file appears to be empty.' });
          setTimeout(() => setUploadNotification(null), 5000);
          return;
        }

        const newRows: TicketData[] = results.data.map((row: any) => {
          const rawDate =
            row['Created at'] || row['created at'] || row.createdAt ||
            row['Created date'] || row['Created At'] || '';
          return {
            channel:  row.Channel  || row.channel  || '',
            createdAt: normalizeDateString(rawDate),
            product:  row.Product  || row.product  || '',
            issue:    row.Issue    || row.issue    || '',
            subType:  row['Sub Type'] || row.subType || '',
            handled:  row.Handled  || row.handled  || '',
          };
        });

        // Use allDataRef (not prev inside setState) so localStorage write is never inside a state updater.
        // React may call state updaters more than once; side effects must live outside them.
        const existingSet = new Set(allDataRef.current.map(r =>
          `${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`
        ));
        const unique = newRows.filter(r =>
          !existingSet.has(`${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`)
        );

        // ---- Persist to localStorage OUTSIDE state updater ----
        try {
          const existingLocalStr = localStorage.getItem('waggle_manual_data');
          let localData: TicketData[] = [];
          if (existingLocalStr) {
            try { localData = JSON.parse(existingLocalStr); } catch (e) {}
          }
          // Guard against overwriting previously-saved rows with an empty unique set
          if (unique.length > 0) {
            const combinedLocal = [...localData, ...unique];
            localStorage.setItem('waggle_manual_data', JSON.stringify(combinedLocal));
          }
        } catch (storageErr) {
          console.warn('localStorage write failed (quota exceeded?):', storageErr);
        }

        // Update React state
        if (unique.length > 0) {
          setAllData(prev => [...prev, ...unique]);
        }

        const msg = unique.length > 0
          ? `✅ Added ${unique.length.toLocaleString()} new rows from "${file.name}". Data is saved in this browser and will persist on refresh.`
          : `ℹ️ No new rows found in "${file.name}" — all ${newRows.length.toLocaleString()} rows already exist in the dashboard.`;

        setUploadNotification({ type: unique.length > 0 ? 'success' : 'error', message: msg });
        setTimeout(() => setUploadNotification(null), 8000);
      },
      error: () => {
        setUploadNotification({ type: 'error', message: 'Failed to parse the CSV file. Please check the format.' });
        setTimeout(() => setUploadNotification(null), 5000);
      }
    });
    event.target.value = '';
  };

  const filterData = (monthValue: string, weekValue: string) => {
    let filtered = allData;
    
    // Filter by month first
    if (monthValue !== 'all') {
      filtered = allData.filter(ticket => {
        const ticketDate = parseDate(ticket.createdAt);
        return isDateInMonth(ticketDate, monthValue);
      });
    }
    
    // Then filter by week if selected
    if (weekValue !== 'all') {
      const week = weeks.find(w => w.value === weekValue);
      if (week) {
        filtered = filtered.filter(ticket => {
          const ticketDate = parseDate(ticket.createdAt);
          return isDateInWeek(ticketDate, week);
        });
      }
    }
    
    setFilteredData(filtered);
  };

  const handleExport = () => {
    let filename = 'analytics-export.csv';
    
    if (selectedMonth === 'all') {
      filename = selectedWeek === 'all' 
        ? 'analytics-all-months.csv' 
        : `analytics-all-months-${selectedWeek}.csv`;
    } else {
      filename = selectedWeek === 'all' 
        ? `analytics-${selectedMonth}.csv` 
        : `analytics-${selectedMonth}-${selectedWeek}.csv`;
    }
    
    exportToCSV(filteredData, filename);
  };

  // Calculate metrics
  const kpiMetrics = calculateKPIs(filteredData);
  const channelDistribution = getChannelDistribution(filteredData);
  const productBreakdown = getProductBreakdown(filteredData);
  const issueAnalysis = getIssueAnalysis(filteredData);
  
  // Weekly escalation needs month context to generate properly, if all months selected, use the first available month dynamically
  const referenceMonth = selectedMonth !== 'all' ? selectedMonth : (availableMonths[0] || 'january-2026');
  // Pass the actual month string so it matches `WeeklyEscalation` logic, though analytics needs updates if we change signatures.
  const weeklyEscalation = getWeeklyEscalationRate(allData, selectedMonth as any);

  // Generate overview stats per month dynamically
  const colorGradients = [
    { from: 'from-blue-500', to: 'to-cyan-500' },
    { from: 'from-purple-500', to: 'to-indigo-600' },
    { from: 'from-pink-500', to: 'to-rose-600' },
    { from: 'from-emerald-500', to: 'to-teal-600' },
    { from: 'from-orange-500', to: 'to-amber-500' }
  ];

  const dynamicMonthsData: MonthOverviewProps[] = (selectedMonth === 'all' ? availableMonths : [selectedMonth]).map((monthStr, index) => {
    const monthData = allData.filter(ticket => {
      const ticketDate = parseDate(ticket.createdAt);
      return isDateInMonth(ticketDate, monthStr);
    });
    
    const [monthName, year] = monthStr.split('-');
    const shortName = `Month ${index + 1}`;
    const displayName = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`;
    const color = colorGradients[index % colorGradients.length];

    return {
      name: displayName,
      shortName,
      data: monthData,
      metrics: calculateKPIs(monthData),
      channels: getChannelDistribution(monthData),
      colorFrom: color.from,
      colorTo: color.to
    };
  });


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Waggle AI Chatbot Dashboard</h1>
            <p className="text-gray-600 mt-1">Track and analyze customer support interactions</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Dynamic Month selector */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-[200px] cursor-pointer"
            >
              <option value="all">All Months</option>
              {availableMonths.map(monthStr => {
                const [monthName, year] = monthStr.split('-');
                return (
                  <option key={monthStr} value={monthStr}>
                    {monthName.charAt(0).toUpperCase() + monthName.slice(1)} {year}
                  </option>
                );
              })}
            </select>

            {/* Dynamic Week selector */}
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-[200px] cursor-pointer"
              disabled={selectedMonth === 'all'}
            >
              <option value="all">All Weeks</option>
              {weeks.map(week => (
                <option key={week.value} value={week.value}>{week.label}</option>
              ))}
            </select>
            {/* Add Data button */}
            <input
              ref={mergeFileInputRef}
              type="file"
              accept=".csv"
              onChange={handleMergeUpload}
              className="hidden"
            />
            <Button
              onClick={() => mergeFileInputRef.current?.click()}
              variant="outline"
              className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Data
            </Button>
            <Button onClick={handleExport} variant="outline" className="bg-white">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Upload notification banner */}
        {uploadNotification && (
          <Card className={`border ${uploadNotification.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <CardContent className="p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {uploadNotification.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-600 shrink-0" />
                )}
                <p className={`font-medium ${uploadNotification.type === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                  {uploadNotification.message}
                </p>
              </div>
              <button onClick={() => setUploadNotification(null)} className="text-gray-400 hover:text-gray-600 shrink-0">
                <X className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        )}



        {/* View Mode Selector - Only show when "All Months" is selected */}
        {selectedMonth === 'all' && (
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setViewMode('overview')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'overview'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Overview Comparison
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'detailed'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Detailed Analysis
              </button>
            </div>
          </div>
        )}

        {/* Overview Comparison Mode */}
        {selectedMonth === 'all' && viewMode === 'overview' ? (
            <OverviewComparison
              monthsData={dynamicMonthsData}
              weeklyEscalation={weeklyEscalation}
            />
        ) : (
          /* Detailed Analysis View */
          <>
            <KPICards metrics={kpiMetrics} />

            <EscalationTrendChart data={weeklyEscalation} instanceId="detailed-analysis" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChannelDistributionChart data={channelDistribution} />
              <ProductBreakdownChart data={productBreakdown} />
            </div>

            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="issues" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 max-w-md">
                    <TabsTrigger value="issues">Issue Analysis</TabsTrigger>
                    <TabsTrigger value="sessions">Detailed Sessions</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="issues" className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Human Escalations Breakdown</h3>
                        <p className="text-sm text-gray-600">
                          Click on any issue to expand and view sub-issues with product breakdown
                        </p>
                      </div>
                      <IssueAnalysisTable data={issueAnalysis} />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sessions" className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">All Sessions</h3>
                        <p className="text-sm text-gray-600">
                          Click column headers to sort. Showing {filteredData.length} sessions.
                        </p>
                      </div>
                      <DetailedSessionsTable data={filteredData} />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

export default App;