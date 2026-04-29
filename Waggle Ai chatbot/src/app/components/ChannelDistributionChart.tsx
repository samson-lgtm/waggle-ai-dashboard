import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ChannelDistribution } from '../types/ticket';

interface ChannelDistributionChartProps {
  data: ChannelDistribution[];
  title?: string;
}

const COLORS = ['#3b82f6', '#f97316', '#10b981', '#8b5cf6', '#f59e0b'];

export function ChannelDistributionChart({ data, title }: ChannelDistributionChartProps) {
  const totalSessions = data.reduce((sum, item) => sum + item.count, 0);
  const chartTitle = title || 'Channel Distribution';
  
  // Create a unique chart identifier based on title
  const chartId = chartTitle.replace(/\s/g, '-').toLowerCase();
  
  // Add unique keys to data to prevent React key warnings across multiple chart instances
  const dataWithKeys = data.map((item, index) => ({
    ...item,
    uniqueKey: `${chartId}-${item.channel.replace(/\s/g, '-')}-${item.count}-${index}`,
    id: `${chartId}-${index}`
  }));
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <p className="text-sm text-gray-600 mt-1">
          Total sessions: {totalSessions.toLocaleString()}
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart key={`piechart-${chartId}`}>
            <Pie
              key={`pie-${chartId}`}
              data={dataWithKeys}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="count"
              label={({ channel, percentage }) => `${channel} (${percentage.toFixed(1)}%)`}
            >
              {dataWithKeys.map((entry) => (
                <Cell key={entry.uniqueKey} fill={COLORS[dataWithKeys.indexOf(entry) % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number, name: string, props: any) => [
                `${value.toLocaleString()} sessions (${props.payload.percentage.toFixed(1)}%)`,
                props.payload.channel
              ]}
              contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}