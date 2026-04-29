import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import { WeeklyEscalation } from '../types/ticket';
import { useId } from 'react';

interface EscalationTrendChartProps {
  data: WeeklyEscalation[];
  title?: string;
  instanceId?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-sm">
            <span className="text-blue-600 font-medium">Total Sessions: </span>
            <span className="text-gray-900">{payload[0].payload.totalSessions.toLocaleString()}</span>
          </p>
          <p className="text-sm">
            <span className="text-orange-600 font-medium">Human Escalations: </span>
            <span className="text-gray-900">{payload[0].payload.humanEscalations.toLocaleString()}</span>
          </p>
          <p className="text-sm">
            <span className="text-red-600 font-medium">Escalation Rate: </span>
            <span className="text-gray-900">{payload[0].payload.escalationRate.toFixed(1)}%</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function EscalationTrendChart({ data, title, instanceId }: EscalationTrendChartProps) {
  // Generate a unique ID for this component instance using React's useId
  const reactId = useId();
  const chartTitle = title || 'Sessions & Escalation Trends';
  const isMonthlyView = data.length <= 3 && data[0]?.week?.includes('2026');
  
  // Create a stable unique identifier for chart re-rendering and gradient IDs
  // Use instanceId if provided, otherwise use reactId for guaranteed uniqueness
  const uniqueId = instanceId || reactId.replace(/:/g, '-');
  const chartId = `${title ? title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() : 'escalation-chart'}-${uniqueId}`;
  const chartKey = `chart-${chartId}-${data.length}`;
  
  // Add unique keys to data to prevent React key warnings
  const dataWithKeys = data.map((item, index) => ({
    ...item,
    id: `${chartId}-${item.week.replace(/\s/g, '-')}-${index}`
  }));
  
  // Unique gradient IDs per chart instance
  const gradientSessionsId = `colorSessions-${chartId}`;
  const gradientEscalationsId = `colorEscalations-${chartId}`;
  const gradientSessionsLineId = `colorSessionsLine-${chartId}`;
  
  return (
    <Card className="shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-black text-gray-900">{chartTitle}</CardTitle>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              Comparing Total Sessions, Human Escalations, and Escalation Rate %
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-xs font-bold text-gray-700">Total Sessions</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200">
              <div className="w-3 h-3 rounded-full bg-orange-600"></div>
              <span className="text-xs font-bold text-gray-700">Human Escalations</span>
            </div>
            <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <span className="text-xs font-bold text-gray-700">Escalation Rate %</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-white">
        <ResponsiveContainer width="100%" height={400}>
          {isMonthlyView ? (
            <ComposedChart 
              data={dataWithKeys} 
              key={chartKey}
              barGap={8}
              barCategoryGap="20%"
            >
              <defs>
                <linearGradient id={gradientSessionsId} x1="0" y1="0" x2="0" y2="1">
                  <stop key={`${gradientSessionsId}-stop-1`} offset="5%" stopColor="#3b82f6" stopOpacity={0.9}/>
                  <stop key={`${gradientSessionsId}-stop-2`} offset="95%" stopColor="#3b82f6" stopOpacity={0.7}/>
                </linearGradient>
                <linearGradient id={gradientEscalationsId} x1="0" y1="0" x2="0" y2="1">
                  <stop key={`${gradientEscalationsId}-stop-1`} offset="5%" stopColor="#f97316" stopOpacity={0.9}/>
                  <stop key={`${gradientEscalationsId}-stop-2`} offset="95%" stopColor="#f97316" stopOpacity={0.7}/>
                </linearGradient>
              </defs>
              <CartesianGrid key={`grid-${chartId}`} strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis 
                key={`xaxis-${chartId}`}
                dataKey="week" 
                tick={{ fontSize: 13, fontWeight: 600 }}
                stroke="#6b7280"
                axisLine={{ stroke: '#d1d5db', strokeWidth: 2 }}
              />
              <YAxis 
                key={`yaxis-left-${chartId}`}
                yAxisId="left"
                tick={{ fontSize: 12, fontWeight: 500 }}
                stroke="#3b82f6"
                axisLine={{ stroke: '#3b82f6', strokeWidth: 2 }}
                label={{ value: 'Sessions Count', angle: -90, position: 'insideLeft', style: { fontSize: 13, fontWeight: 'bold', fill: '#1e40af' } }}
              />
              <YAxis 
                key={`yaxis-right-${chartId}`}
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12, fontWeight: 500 }}
                stroke="#ef4444"
                axisLine={{ stroke: '#ef4444', strokeWidth: 2 }}
                label={{ value: 'Escalation Rate %', angle: 90, position: 'insideRight', style: { fontSize: 13, fontWeight: 'bold', fill: '#dc2626' } }}
              />
              <Tooltip key={`tooltip-${chartId}`} content={<CustomTooltip />} />
              <Legend 
                key={`legend-${chartId}`}
                wrapperStyle={{ paddingTop: '25px', fontSize: '14px', fontWeight: 'bold' }}
                iconType="square"
                iconSize={14}
              />
              <Bar 
                key={`bar-total-${chartId}`}
                yAxisId="left"
                dataKey="totalSessions" 
                fill={`url(#${gradientSessionsId})`}
                name="Total Sessions"
                radius={[10, 10, 0, 0]}
                maxBarSize={80}
              />
              <Bar 
                key={`bar-human-${chartId}`}
                yAxisId="left"
                dataKey="humanEscalations" 
                fill={`url(#${gradientEscalationsId})`}
                name="Human Escalations"
                radius={[10, 10, 0, 0]}
                maxBarSize={80}
              />
              <Line 
                key={`line-rate-${chartId}`}
                yAxisId="right"
                type="monotone" 
                dataKey="escalationRate" 
                stroke="#ef4444" 
                strokeWidth={4}
                dot={{ fill: '#ef4444', r: 6, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, strokeWidth: 2 }}
                name="Escalation Rate %"
              />
            </ComposedChart>
          ) : (
            <LineChart 
              data={dataWithKeys} 
              key={chartKey}
            >
              <defs>
                <linearGradient id={gradientSessionsLineId} x1="0" y1="0" x2="0" y2="1">
                  <stop key={`${gradientSessionsLineId}-stop-1`} offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop key={`${gradientSessionsLineId}-stop-2`} offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid key={`grid-${chartId}`} strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis 
                key={`xaxis-${chartId}`}
                dataKey="week" 
                tick={{ fontSize: 12, fontWeight: 600 }}
                stroke="#6b7280"
                axisLine={{ stroke: '#d1d5db', strokeWidth: 2 }}
              />
              <YAxis 
                key={`yaxis-left-${chartId}`}
                yAxisId="left"
                tick={{ fontSize: 12, fontWeight: 500 }}
                stroke="#3b82f6"
                axisLine={{ stroke: '#3b82f6', strokeWidth: 2 }}
                label={{ value: 'Sessions Count', angle: -90, position: 'insideLeft', style: { fontSize: 13, fontWeight: 'bold', fill: '#1e40af' } }}
              />
              <YAxis 
                key={`yaxis-right-${chartId}`}
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12, fontWeight: 500 }}
                stroke="#ef4444"
                axisLine={{ stroke: '#ef4444', strokeWidth: 2 }}
                label={{ value: 'Escalation Rate %', angle: 90, position: 'insideRight', style: { fontSize: 13, fontWeight: 'bold', fill: '#dc2626' } }}
              />
              <Tooltip key={`tooltip-${chartId}`} content={<CustomTooltip />} />
              <Legend 
                key={`legend-${chartId}`}
                wrapperStyle={{ paddingTop: '25px', fontSize: '14px', fontWeight: 'bold' }}
                iconType="line"
                iconSize={20}
              />
              <Line 
                key={`line-total-${chartId}`}
                yAxisId="left"
                type="monotone" 
                dataKey="totalSessions" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 5, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 7, strokeWidth: 2 }}
                name="Total Sessions"
              />
              <Line 
                key={`line-human-${chartId}`}
                yAxisId="left"
                type="monotone" 
                dataKey="humanEscalations" 
                stroke="#f97316" 
                strokeWidth={3}
                dot={{ fill: '#f97316', r: 5, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 7, strokeWidth: 2 }}
                name="Human Escalations"
              />
              <Line 
                key={`line-rate-${chartId}`}
                yAxisId="right"
                type="monotone" 
                dataKey="escalationRate" 
                stroke="#ef4444" 
                strokeWidth={3}
                strokeDasharray="8 4"
                dot={{ fill: '#ef4444', r: 5, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 7, strokeWidth: 2 }}
                name="Escalation Rate %"
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}