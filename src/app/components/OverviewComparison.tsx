import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChannelDistributionChart } from './ChannelDistributionChart';
import { EscalationTrendChart } from './EscalationTrendChart';
import { KPIMetrics, ChannelDistribution, WeeklyEscalationData, TicketData } from '../types/ticket';
import { calculateKPIs, getChannelDistribution, getProductBreakdown, getIssueBreakdown } from '../utils/analytics';

export interface MonthOverviewProps {
  name: string; // e.g. "January 2026"
  shortName: string; // e.g. "Month 1"
  data: TicketData[];
  metrics: KPIMetrics;
  channels: ChannelDistribution[];
  colorFrom: string;
  colorTo: string;
}

interface OverviewComparisonProps {
  monthsData: MonthOverviewProps[];
  weeklyEscalation: WeeklyEscalationData[];
}

export function OverviewComparison({
  monthsData,
  weeklyEscalation,
}: OverviewComparisonProps) {
  const allSessions = monthsData.flatMap(m => m.data);
  const combinedKPIs = calculateKPIs(allSessions);
  const topChannel = getChannelDistribution(allSessions)[0];
  const top5Products = getProductBreakdown(allSessions).slice(0, 5);
  const top5Issues = getIssueBreakdown(allSessions, 1).slice(0, 5);

  return (
    <>
      {/* Month-to-Month Comparison Header */}
      <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <CardContent className="p-5 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Performance Analysis
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg">
              Dynamic Monthly Overview
            </h2>
            <p className="text-base text-white/90 font-medium max-w-2xl mx-auto">
              Comprehensive analysis across available months
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Grid of Dynamic Monthly KPI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {monthsData.map((month) => (
          <Card key={month.name} className={`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${month.colorFrom} ${month.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <CardHeader className="text-white pb-3 pt-4 relative z-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {month.shortName}
                </div>
                <CardTitle className="text-2xl font-black mb-3 drop-shadow">{month.name}</CardTitle>
                <div className="bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md">
                  <p className="text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold">Total Sessions</p>
                  <p className="text-4xl font-black tracking-tight drop-shadow-md">
                    {month.data.length.toLocaleString()}
                  </p>
                  {month.data.length < 200 && (
                    <p className="text-[10px] text-white/80 mt-1 font-medium">Partial data recorded</p>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 bg-white/95 backdrop-blur-sm relative z-10">
              <div className="space-y-2">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-gray-700 font-bold uppercase tracking-wide">Bot Handled</p>
                    </div>
                    <div className="bg-white rounded px-2 py-0.5 shadow-sm border border-green-300">
                      <p className="text-sm font-black text-green-700">{month.metrics.botPercentage.toFixed(1)}%</p>
                    </div>
                  </div>
                  <p className="text-xl font-black text-gray-900">{month.metrics.botHandled.toLocaleString()}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-gray-700 font-bold uppercase tracking-wide">Human Escalated</p>
                    </div>
                    <div className="bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300">
                      <p className="text-sm font-black text-orange-700">{month.metrics.humanPercentage.toFixed(1)}%</p>
                    </div>
                  </div>
                  <p className="text-xl font-black text-gray-900">{month.metrics.humanHandled.toLocaleString()}</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-3 shadow-sm border border-red-200">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-[10px] text-gray-700 font-bold uppercase tracking-wide">Escalation Rate</p>
                  </div>
                  <p className="text-2xl font-black text-red-600">{month.metrics.escalationRate.toFixed(1)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Month-to-Month Trend Chart */}
      <EscalationTrendChart 
        data={weeklyEscalation} 
        title="Sessions & Escalation Comparison"
        instanceId="overview-comparison"
      />

      {/* Dynamic Channels Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {monthsData.map((month) => (
          <ChannelDistributionChart 
            key={month.name}
            data={month.channels} 
            title={`${month.name} - Channels`}
          />
        ))}
      </div>

      {/* Combined Performance Summary */}
      <Card className="border-0 shadow-xl overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight">Waggle AI Performance Summary</h3>
              <p className="text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80">Full Analytics Overview</p>
            </div>
          </div>
        </div>
        <CardContent className="p-6 bg-gradient-to-br from-slate-50 to-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Stats */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-4 h-4 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Sessions</p>
              </div>
              <p className="text-2xl font-black text-slate-900 tracking-tight mb-0.5">{combinedKPIs.totalSessions.toLocaleString()}</p>
              <p className="text-[10px] text-slate-400 font-medium italic">Across {monthsData.length} months</p>
            </div>

            {/* Efficiency Stats */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                  <svg className="w-4 h-4 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Bot Efficiency</p>
              </div>
              <p className="text-2xl font-black text-slate-900 tracking-tight mb-0.5">{combinedKPIs.botPercentage.toFixed(1)}%</p>
              <p className="text-[10px] text-emerald-600 font-bold">{combinedKPIs.botHandled.toLocaleString()} Handled</p>
            </div>

            {/* Escalation Stats */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300">
                  <svg className="w-4 h-4 text-rose-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg Escalation</p>
              </div>
              <p className="text-2xl font-black text-rose-600 tracking-tight mb-0.5">{combinedKPIs.escalationRate.toFixed(1)}%</p>
              <p className="text-[10px] text-rose-400 font-bold uppercase">Human Assistance Needs</p>
            </div>

            {/* Top Channel */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                  <svg className="w-4 h-4 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Main Channel</p>
              </div>
              <p className="text-2xl font-black text-slate-900 tracking-tight mb-0.5">{topChannel?.channel || 'N/A'}</p>
              <p className="text-[10px] text-indigo-500 font-bold uppercase">{(topChannel?.percentage || 0).toFixed(1)}% Share</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800">
              <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h4 className="flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Top 5 Products Escalated
              </h4>
              <div className="space-y-2 relative z-10">
                {top5Products.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="font-bold text-sm text-indigo-50 flex items-center gap-2">
                       <span className="text-indigo-400 font-mono text-xs opacity-70">{idx + 1}.</span> {p.product || 'N/A'}
                    </span>
                    <span className="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50">
                      {p.count.toLocaleString()} cases
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30">
              <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                Top 5 Issue Types
              </h4>
              <div className="space-y-2 relative z-10">
                {top5Issues.map((i, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors">
                    <span className="font-bold text-sm text-purple-50 flex items-center gap-2">
                      <span className="text-purple-300 font-mono text-xs opacity-70">{idx + 1}.</span> {i.issue || 'N/A'}
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20">
                      {i.total.toLocaleString()} escapements
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}