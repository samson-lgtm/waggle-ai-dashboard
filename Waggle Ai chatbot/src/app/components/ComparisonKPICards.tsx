import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { KPIMetrics } from '../types/ticket';
import { TrendingUp, TrendingDown, Users, Bot, AlertTriangle, Calendar } from 'lucide-react';

interface ComparisonKPICardsProps {
  januaryMetrics: KPIMetrics;
  februaryMetrics: KPIMetrics;
}

export function ComparisonKPICards({ januaryMetrics, februaryMetrics }: ComparisonKPICardsProps) {
  const calculateChange = (jan: number, feb: number) => {
    if (jan === 0) return 0;
    return ((feb - jan) / jan) * 100;
  };

  const sessionChange = calculateChange(januaryMetrics.totalSessions, februaryMetrics.totalSessions);
  const botChange = calculateChange(januaryMetrics.botHandled, februaryMetrics.botHandled);
  const humanChange = calculateChange(januaryMetrics.humanHandled, februaryMetrics.humanHandled);
  const escalationChange = februaryMetrics.escalationRate - januaryMetrics.escalationRate;

  const ChangeIndicator = ({ value, showPercent = true }: { value: number; showPercent?: boolean }) => {
    const isPositive = value > 0;
    const isNeutral = value === 0;
    
    return (
      <div className={`flex items-center gap-1 text-sm font-semibold ${
        isNeutral ? 'text-gray-500' : isPositive ? 'text-green-600' : 'text-red-600'
      }`}>
        {!isNeutral && (isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />)}
        {isPositive && '+'}{value.toFixed(1)}{showPercent && '%'}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Month Headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-blue-100 text-sm font-medium">January 2026</p>
                <p className="text-2xl font-bold">{januaryMetrics.totalSessions.toLocaleString()} Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-purple-100 text-sm font-medium">February 2026</p>
                <p className="text-2xl font-bold">{februaryMetrics.totalSessions.toLocaleString()} Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Sessions Comparison */}
        <Card className="border-2 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Total Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">January</span>
                <span className="font-bold text-lg">{januaryMetrics.totalSessions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">February</span>
                <span className="font-bold text-lg">{februaryMetrics.totalSessions.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t flex justify-between items-center">
                <span className="text-sm font-medium">Change</span>
                <ChangeIndicator value={sessionChange} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bot Handled Comparison */}
        <Card className="border-2 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-600" />
              Bot Handled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">January</span>
                <div className="text-right">
                  <span className="font-bold text-lg">{januaryMetrics.botHandled.toLocaleString()}</span>
                  <span className="text-sm text-blue-600 ml-2">({januaryMetrics.botPercentage.toFixed(1)}%)</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">February</span>
                <div className="text-right">
                  <span className="font-bold text-lg">{februaryMetrics.botHandled.toLocaleString()}</span>
                  <span className="text-sm text-blue-600 ml-2">({februaryMetrics.botPercentage.toFixed(1)}%)</span>
                </div>
              </div>
              <div className="pt-2 border-t flex justify-between items-center">
                <span className="text-sm font-medium">Change</span>
                <ChangeIndicator value={botChange} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Human Handled Comparison */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-600" />
              Human Handled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">January</span>
                <div className="text-right">
                  <span className="font-bold text-lg">{januaryMetrics.humanHandled.toLocaleString()}</span>
                  <span className="text-sm text-orange-600 ml-2">({januaryMetrics.humanPercentage.toFixed(1)}%)</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">February</span>
                <div className="text-right">
                  <span className="font-bold text-lg">{februaryMetrics.humanHandled.toLocaleString()}</span>
                  <span className="text-sm text-orange-600 ml-2">({februaryMetrics.humanPercentage.toFixed(1)}%)</span>
                </div>
              </div>
              <div className="pt-2 border-t flex justify-between items-center">
                <span className="text-sm font-medium">Change</span>
                <ChangeIndicator value={humanChange} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Escalation Rate Comparison */}
        <Card className={`border-2 ${escalationChange > 0 ? 'border-red-200' : 'border-green-200'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Escalation Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">January</span>
                <span className="font-bold text-lg text-red-600">{januaryMetrics.escalationRate.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">February</span>
                <span className="font-bold text-lg text-red-600">{februaryMetrics.escalationRate.toFixed(1)}%</span>
              </div>
              <div className="pt-2 border-t flex justify-between items-center">
                <span className="text-sm font-medium">Change</span>
                <ChangeIndicator value={escalationChange} showPercent={false} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Key Insights</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Sessions {sessionChange > 0 ? 'increased' : sessionChange < 0 ? 'decreased' : 'remained stable'} by{' '}
                    <strong>{Math.abs(sessionChange).toFixed(1)}%</strong> from January to February
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Bot resolution rate: <strong>{januaryMetrics.botPercentage.toFixed(1)}%</strong> (Jan) vs{' '}
                    <strong>{februaryMetrics.botPercentage.toFixed(1)}%</strong> (Feb)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Escalation rate {escalationChange > 0 ? 'increased' : escalationChange < 0 ? 'decreased' : 'remained stable'} by{' '}
                    <strong>{Math.abs(escalationChange).toFixed(1)} percentage points</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
