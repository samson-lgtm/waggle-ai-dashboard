import { Card, CardContent } from './ui/card';
import { KPIMetrics } from '../types/ticket';
import { TrendingUp, Users, Bot, AlertTriangle } from 'lucide-react';

interface KPICardsProps {
  metrics: KPIMetrics;
}

export function KPICards({ metrics }: KPICardsProps) {
  const getEscalationColor = (rate: number): string => {
    if (rate < 20) return 'text-green-600';
    if (rate < 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEscalationBgColor = (rate: number): string => {
    if (rate < 20) return 'bg-green-50';
    if (rate < 40) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Sessions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Sessions</p>
              <p className="text-3xl font-bold mt-2">{metrics.totalSessions.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bot Handled */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bot Handled Sessions</p>
              <p className="text-3xl font-bold mt-2">{metrics.botHandled.toLocaleString()}</p>
              <p className="text-sm text-blue-600 mt-1">{metrics.botPercentage.toFixed(1)}%</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Human Handled */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Human Handled Sessions</p>
              <p className="text-3xl font-bold mt-2">{metrics.humanHandled.toLocaleString()}</p>
              <p className="text-sm text-orange-600 mt-1">{metrics.humanPercentage.toFixed(1)}%</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-full">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Escalation Rate */}
      <Card className={getEscalationBgColor(metrics.escalationRate)}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Escalation Rate</p>
              <p className={`text-3xl font-bold mt-2 ${getEscalationColor(metrics.escalationRate)}`}>
                {metrics.escalationRate.toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {metrics.escalationRate < 20 ? 'Excellent' : metrics.escalationRate < 40 ? 'Good' : 'Needs Attention'}
              </p>
            </div>
            <div className={`p-3 rounded-full ${getEscalationColor(metrics.escalationRate).replace('text', 'bg').replace('600', '100')}`}>
              <AlertTriangle className={`w-6 h-6 ${getEscalationColor(metrics.escalationRate)}`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
