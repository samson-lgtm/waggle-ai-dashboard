import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChannelDistributionChart } from './ChannelDistributionChart';
import { EscalationTrendChart } from './EscalationTrendChart';
import { KPIMetrics, ChannelDistribution, WeeklyEscalationData } from '../types/ticket';
import { calculateKPIs, getChannelDistribution, getProductBreakdown, getIssueBreakdown } from '../utils/analytics';

interface OverviewComparisonProps {
  januaryData: any[];
  februaryData: any[];
  marchData: any[];
  januaryMetrics: KPIMetrics;
  februaryMetrics: KPIMetrics;
  marchMetrics: KPIMetrics;
  januaryChannels: ChannelDistribution[];
  februaryChannels: ChannelDistribution[];
  marchChannels: ChannelDistribution[];
  weeklyEscalation: WeeklyEscalationData[];
}

export function OverviewComparison({
  januaryData,
  februaryData,
  marchData,
  januaryMetrics,
  februaryMetrics,
  marchMetrics,
  januaryChannels,
  februaryChannels,
  marchChannels,
  weeklyEscalation,
}: OverviewComparisonProps) {
  return (
    <>
      {/* Month-to-Month Comparison Header */}
      <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <CardContent className="p-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-4 uppercase tracking-wider border border-white/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Performance Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight drop-shadow-lg">
              Monthly Overview Comparison
            </h2>
            <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto">
              Comprehensive analysis across January, February & March 2026
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 3-Column Monthly KPI Cards - Modern Glassmorphism Design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* January Card */}
        <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-blue-500 to-cyan-500 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="text-white pb-4 pt-6 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3 uppercase tracking-wider border border-white/30">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Month 1
              </div>
              <CardTitle className="text-3xl font-black mb-4 drop-shadow">January 2026</CardTitle>
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-2 font-bold">Total Sessions</p>
                <p className="text-6xl font-black tracking-tight drop-shadow-lg">
                  {januaryData.length.toLocaleString()}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 bg-white/95 backdrop-blur-sm relative z-10">
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm border border-green-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Bot Handled</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-green-300">
                    <p className="text-2xl font-black text-green-700">{januaryMetrics.botPercentage.toFixed(1)}%</p>
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900">{januaryMetrics.botHandled.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Human Escalated</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-orange-300">
                    <p className="text-2xl font-black text-orange-700">{januaryMetrics.humanPercentage.toFixed(1)}%</p>
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900">{januaryMetrics.humanHandled.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 shadow-sm border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Escalation Rate</p>
                </div>
                <p className="text-4xl font-black text-red-600">{januaryMetrics.escalationRate.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* February Card */}
        <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="text-white pb-4 pt-6 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3 uppercase tracking-wider border border-white/30">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Month 2
              </div>
              <CardTitle className="text-3xl font-black mb-4 drop-shadow">February 2026</CardTitle>
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-2 font-bold">Total Sessions</p>
                <p className="text-6xl font-black tracking-tight drop-shadow-lg">
                  {februaryData.length.toLocaleString()}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 bg-white/95 backdrop-blur-sm relative z-10">
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm border border-green-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Bot Handled</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-green-300">
                    <p className="text-2xl font-black text-green-700">{februaryMetrics.botPercentage.toFixed(1)}%</p>
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900">{februaryMetrics.botHandled.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Human Escalated</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-orange-300">
                    <p className="text-2xl font-black text-orange-700">{februaryMetrics.humanPercentage.toFixed(1)}%</p>
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900">{februaryMetrics.humanHandled.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 shadow-sm border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Escalation Rate</p>
                </div>
                <p className="text-4xl font-black text-red-600">{februaryMetrics.escalationRate.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* March Card */}
        <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-pink-500 to-rose-600 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="text-white pb-4 pt-6 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3 uppercase tracking-wider border border-white/30">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Month 3
              </div>
              <CardTitle className="text-3xl font-black mb-4 drop-shadow">March 2026</CardTitle>
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-2 font-bold">Total Sessions</p>
                <p className="text-6xl font-black tracking-tight drop-shadow-lg">
                  {marchData.length.toLocaleString()}
                </p>
                {marchData.length < 200 && (
                  <p className="text-xs text-white/70 mt-2 font-medium">Partial data (Mar 1-2)</p>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 bg-white/95 backdrop-blur-sm relative z-10">
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm border border-green-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Bot Handled</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-green-300">
                    <p className="text-2xl font-black text-green-700">{marchMetrics.botPercentage.toFixed(1)}%</p>
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900">{marchMetrics.botHandled.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Human Escalated</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-orange-300">
                    <p className="text-2xl font-black text-orange-700">{marchMetrics.humanPercentage.toFixed(1)}%</p>
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900">{marchMetrics.humanHandled.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 shadow-sm border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">Escalation Rate</p>
                </div>
                <p className="text-4xl font-black text-red-600">{marchMetrics.escalationRate.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Month-to-Month Trend Chart */}
      <EscalationTrendChart 
        data={weeklyEscalation} 
        title="Sessions & Escalation Comparison"
        instanceId="overview-comparison"
      />

      {/* 3-Column Channel Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChannelDistributionChart 
          data={januaryChannels} 
          title="January - Channels"
        />
        <ChannelDistributionChart 
          data={februaryChannels} 
          title="February - Channels"
        />
        <ChannelDistributionChart 
          data={marchChannels} 
          title="March - Channels"
        />
      </div>

      {/* 2026 Combined Performance Summary */}
      {(() => {
        const allSessions = [...januaryData, ...februaryData, ...marchData];
        const combinedKPIs = calculateKPIs(allSessions);
        const topChannel = getChannelDistribution(allSessions)[0];
        const topProduct = getProductBreakdown(allSessions)[0];
        const topIssue = getIssueBreakdown(allSessions, 1)[0];

        return (
          <Card className="border-0 shadow-2xl overflow-hidden mt-6">
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight">Waggle AI Performance Summary</h3>
                  <p className="text-sm text-indigo-200 font-bold uppercase tracking-widest opacity-80">January - March Analytics Overview</p>
                </div>
              </div>
            </div>
            <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Total Stats */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Total Sessions</p>
                  </div>
                  <p className="text-4xl font-black text-slate-900 tracking-tight mb-1">{combinedKPIs.totalSessions.toLocaleString()}</p>
                  <p className="text-xs text-slate-400 font-medium italic">Across 3 months</p>
                </div>

                {/* Efficiency Stats */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                      <svg className="w-6 h-6 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Bot Efficiency</p>
                  </div>
                  <p className="text-4xl font-black text-slate-900 tracking-tight mb-1">{combinedKPIs.botPercentage.toFixed(1)}%</p>
                  <p className="text-xs text-emerald-600 font-bold">{combinedKPIs.botHandled.toLocaleString()} Handled</p>
                </div>

                {/* Escalation Stats */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300">
                      <svg className="w-6 h-6 text-rose-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Avg Escalation</p>
                  </div>
                  <p className="text-4xl font-black text-rose-600 tracking-tight mb-1">{combinedKPIs.escalationRate.toFixed(1)}%</p>
                  <p className="text-xs text-rose-400 font-bold uppercase">Human Assistance Needs</p>
                </div>

                {/* Top Channel */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                      <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Main Channel</p>
                  </div>
                  <p className="text-4xl font-black text-slate-900 tracking-tight mb-1">{topChannel?.channel || 'N/A'}</p>
                  <p className="text-xs text-indigo-500 font-bold uppercase">{(topChannel?.percentage || 0).toFixed(1)}% Share</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </div>
                  <h4 className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Top Support Product</h4>
                  <p className="text-4xl font-black mb-2">{topProduct?.product || 'N/A'}</p>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/20">
                      {topProduct?.count.toLocaleString()} Support Tickets
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-indigo-100 font-black uppercase tracking-[0.2em] text-xs mb-4">Leading Issue Type</h4>
                  <p className="text-4xl font-black mb-2 line-clamp-1">{topIssue?.issue || 'N/A'}</p>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-black/20 rounded-full text-xs font-bold border border-white/10">
                      {topIssue?.total.toLocaleString()} Reported Cases
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })()}
    </>
  );
}