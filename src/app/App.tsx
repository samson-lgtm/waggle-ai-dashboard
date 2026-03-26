import { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Upload, Download, PlusCircle, X, CheckCircle2 } from 'lucide-react';
import { TicketData, WeekOption } from './types/ticket';
import { parseDate, getWeeksForMonth, isDateInWeek, isDateInMonth } from './utils/dateUtils';
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
import { OverviewComparison } from './components/OverviewComparison';
import { defaultTicketData } from './data/defaultData';
import { loadJanuaryData } from './utils/loadJanuaryData';
import { loadMarchData } from './utils/loadMarchData';

const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQmdcr8EaeN04nsRVatF2B0lVYCOpsrvnFoldLpPjuRBXeOcHL1KGCQRbCw62A78cVtxxY2fW246vB/pub?output=csv';

type MonthOption = 'january' | 'february' | 'march' | 'all';
type ComparisonOption = 'jan-feb' | 'feb-mar' | 'jan-mar';

function App() {
  const [allData, setAllData] = useState<TicketData[]>(defaultTicketData);
  const [filteredData, setFilteredData] = useState<TicketData[]>(defaultTicketData);
  const [selectedMonth, setSelectedMonth] = useState<MonthOption>('all');
  const [selectedWeek, setSelectedWeek] = useState<string>('all');
  const [weeks, setWeeks] = useState<WeekOption[]>([]);
  const [januaryDataLoaded, setJanuaryDataLoaded] = useState(false);
  const [marchDataLoaded, setMarchDataLoaded] = useState(false);
  const [isLoadingJanData, setIsLoadingJanData] = useState(false);
  const [isLoadingMarData, setIsLoadingMarData] = useState(false);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');
  const [comparisonMode, setComparisonMode] = useState<ComparisonOption>('jan-feb');
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mergeFileInputRef = useRef<HTMLInputElement>(null);
  const [uploadNotification, setUploadNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Sync with Google Sheets on mount
  useEffect(() => {
    const syncWithSheets = () => {
      setIsSyncing(true);
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

            // Detect what was loaded from sheets
            const hasJan = parsedData.some(r => isDateInMonth(parseDate(r.createdAt), 'january'));
            const hasMar = parsedData.some(r => isDateInMonth(parseDate(r.createdAt), 'march'));
            if (hasJan) setJanuaryDataLoaded(true);
            if (hasMar) setMarchDataLoaded(true);

            setLastSyncTime(new Date().toLocaleTimeString());
            console.log(`Synced ${parsedData.length} rows from Google Sheets.`);
          }
          setIsSyncing(false);
        },
        error: (error) => {
          console.error('Error syncing with Google Sheets:', error);
          setIsSyncing(false);
          // Fallback to default data if sync fails
          if (allData.length === 0) setAllData(defaultTicketData);
        }
      });
    };

    // 1. Initial Local Data Load (January and March)
    const loadLocalHistoricalData = async () => {
      setIsLoadingJanData(true);
      setIsLoadingMarData(true);

      try {
        const [janData, marData] = await Promise.all([
          loadJanuaryData(),
          loadMarchData()
        ]);

        setAllData(prev => {
          const existingSet = new Set(prev.map(r => 
            `${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`
          ));
          
          const newJan = janData.filter(r => 
            !existingSet.has(`${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`)
          );
          const newMar = marData.filter(r => 
            !existingSet.has(`${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`)
          );
          
          return [...prev, ...newJan, ...newMar];
        });

        if (janData.length > 0) setJanuaryDataLoaded(true);
        if (marData.length > 0) setMarchDataLoaded(true);
      } catch (err) {
        console.error("Historical data load failed:", err);
      } finally {
        setIsLoadingJanData(false);
        setIsLoadingMarData(false);
      }
    };

    loadLocalHistoricalData();
    syncWithSheets();
  }, []);

  useEffect(() => {
    const monthWeeks = getWeeksForMonth(selectedMonth);
    setWeeks(monthWeeks);
    setSelectedWeek('all'); // Reset week selection when month changes
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
          createdAt: row['Created at'] || row.createdAt || row['Created date'] || '',
          product: row.Product || row.product || '',
          issue: row.Issue || row.issue || '',
          subType: row['Sub Type'] || row.subType || '',
          handled: row.Handled || row.handled || ''
        }));
        
        setAllData(parsedData);
        setFilteredData(parsedData);
      }
    });
    // Reset input
    event.target.value = '';
  };

  /**
   * Normalize a date string to DD-MM-YYYY format.
   * Handles: YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY, YYYY/MM/DD
   */
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

  /** Merge-upload: appends new CSV rows to existing data */
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

        // Detect if any new rows are in March → mark march as loaded
        const hasMarchRows = newRows.some(r => {
          try {
            const d = parseDate(r.createdAt);
            return isDateInMonth(d, 'march');
          } catch { return false; }
        });

        setAllData(prev => {
          // Simple deduplication: skip rows that are 100% identical to an existing one
          const existingSet = new Set(prev.map(r =>
            `${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`
          ));
          const unique = newRows.filter(r =>
            !existingSet.has(`${r.channel}|${r.createdAt}|${r.product}|${r.issue}|${r.subType}|${r.handled}`)
          );
          return [...prev, ...unique];
        });

        if (hasMarchRows) setMarchDataLoaded(true);

        const addedCount = newRows.length;
        setUploadNotification({
          type: 'success',
          message: `Successfully added ${addedCount.toLocaleString()} rows from "${file.name}".`,
        });
        setTimeout(() => setUploadNotification(null), 6000);
      },
      error: () => {
        setUploadNotification({ type: 'error', message: 'Failed to parse the CSV file. Please check the format.' });
        setTimeout(() => setUploadNotification(null), 5000);
      }
    });

    // Reset input so the same file can be re-uploaded if needed
    event.target.value = '';
  };

  const filterData = (monthValue: MonthOption, weekValue: string) => {
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
        ? `analytics-${selectedMonth}-2026.csv` 
        : `analytics-${selectedMonth}-${selectedWeek}.csv`;
    }
    
    exportToCSV(filteredData, filename);
  };

  // Calculate metrics
  const kpiMetrics = calculateKPIs(filteredData);
  const channelDistribution = getChannelDistribution(filteredData);
  const productBreakdown = getProductBreakdown(filteredData);
  const weeklyEscalation = getWeeklyEscalationRate(allData, selectedMonth);
  const issueAnalysis = getIssueAnalysis(filteredData);

  // Calculate separate metrics for January, February, and March (for Overview mode)
  const januaryData = allData.filter(ticket => {
    const ticketDate = parseDate(ticket.createdAt);
    return isDateInMonth(ticketDate, 'january');
  });
  const februaryData = allData.filter(ticket => {
    const ticketDate = parseDate(ticket.createdAt);
    return isDateInMonth(ticketDate, 'february');
  });
  const marchData = allData.filter(ticket => {
    const ticketDate = parseDate(ticket.createdAt);
    return isDateInMonth(ticketDate, 'march');
  });
  const januaryMetrics = calculateKPIs(januaryData);
  const februaryMetrics = calculateKPIs(februaryData);
  const marchMetrics = calculateKPIs(marchData);
  const januaryChannels = getChannelDistribution(januaryData);
  const februaryChannels = getChannelDistribution(februaryData);
  const marchChannels = getChannelDistribution(marchData);

  if (allData.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Chatbot Analytics Dashboard</h2>
              <p className="text-gray-600">Upload your CSV file to get started</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              size="lg"
              className="w-full"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload CSV File
            </Button>
            <p className="text-xs text-gray-500 mt-4">
              Expected columns: Channel, Created at, Product, Issue, Sub Type, Handled
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <Select value={selectedMonth} onValueChange={(value: any) => setSelectedMonth(value)}>
              <SelectTrigger className="w-full sm:w-[200px] bg-white">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Months</SelectItem>
                <SelectItem value="january">January 2026</SelectItem>
                <SelectItem value="february">February 2026</SelectItem>
                <SelectItem value="march">March 2026</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="w-full sm:w-[200px] bg-white">
                <SelectValue placeholder="Select week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Weeks</SelectItem>
                {weeks.map(week => (
                  <SelectItem key={week.value} value={week.value}>
                    {week.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* ── Add Data button ── */}
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

        {isSyncing && (
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
              <p className="text-indigo-900 font-medium italic">Syncing live data from Google Sheets...</p>
            </CardContent>
          </Card>
        )}

        {/* Data Range Indicator */}
        {selectedMonth === 'all' && filteredData.length > 0 && (
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <p className="font-semibold text-gray-900">
                    Viewing Combined Data: {januaryDataLoaded ? 'January, ' : ''}February{marchDataLoaded ? ' & March' : ''} 2026
                  </p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-gray-600">Total Sessions:</span>
                    <span className="ml-2 font-bold text-gray-900">{filteredData.length.toLocaleString()}</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-gray-600">Last Synced:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      {lastSyncTime || 'Jan 1 - Mar 23, 2026'}
                    </span>
                  </div>
                </div>
              </div>
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

        {/* Overview Comparison Mode - Only available when "All Months" is selected */}
        {selectedMonth === 'all' && viewMode === 'overview' ? (
          <>
            {/* Show loading state if January data is not yet loaded */}
            {!januaryDataLoaded || isLoadingJanData ? (
              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Overview Comparison</h3>
                  <p className="text-gray-600">Preparing monthly data for comparison...</p>
                </CardContent>
              </Card>
            ) : (
              <OverviewComparison
                januaryData={januaryData}
                februaryData={februaryData}
                marchData={marchData}
                januaryMetrics={januaryMetrics}
                februaryMetrics={februaryMetrics}
                marchMetrics={marchMetrics}
                januaryChannels={januaryChannels}
                februaryChannels={februaryChannels}
                marchChannels={marchChannels}
                weeklyEscalation={weeklyEscalation}
              />
            )}
          </>
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