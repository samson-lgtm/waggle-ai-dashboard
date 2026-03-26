import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChannelDistribution } from '../types/ticket';

interface ComparisonChartsProps {
  januaryChannels: ChannelDistribution[];
  februaryChannels: ChannelDistribution[];
}

const COLORS = ['#3b82f6', '#f97316', '#10b981', '#8b5cf6', '#f59e0b'];

export function ComparisonCharts({ januaryChannels, februaryChannels }: ComparisonChartsProps) {
  // Prepare combined data for bar chart
  const allChannels = Array.from(
    new Set([
      ...januaryChannels.map(c => c.channel),
      ...februaryChannels.map(c => c.channel)
    ])
  );

  const comparisonData = allChannels.map(channel => ({
    channel,
    January: januaryChannels.find(c => c.channel === channel)?.count || 0,
    February: februaryChannels.find(c => c.channel === channel)?.count || 0
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Side-by-side Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Channel Comparison (Jan vs Feb)</CardTitle>
          <p className="text-sm text-gray-600 mt-1">Session count by channel</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="channel" 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                formatter={(value: number) => value.toLocaleString()}
              />
              <Legend />
              <Bar dataKey="January" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="February" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Donut Charts Side by Side */}
      <Card>
        <CardHeader>
          <CardTitle>Channel Distribution Split</CardTitle>
          <p className="text-sm text-gray-600 mt-1">Percentage breakdown by month</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {/* January Donut */}
            <div>
              <h4 className="text-center font-semibold text-sm mb-2 text-blue-600">January</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={januaryChannels}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="count"
                  >
                    {januaryChannels.map((entry, index) => (
                      <Cell key={`cell-jan-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string, props: any) => [
                      `${value.toLocaleString()} (${props.payload.percentage.toFixed(1)}%)`,
                      props.payload.channel
                    ]}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-2">
                {januaryChannels.slice(0, 3).map((channel, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    />
                    <span className="text-gray-700">{channel.channel}: {channel.percentage.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* February Donut */}
            <div>
              <h4 className="text-center font-semibold text-sm mb-2 text-purple-600">February</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={februaryChannels}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="count"
                  >
                    {februaryChannels.map((entry, index) => (
                      <Cell key={`cell-feb-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string, props: any) => [
                      `${value.toLocaleString()} (${props.payload.percentage.toFixed(1)}%)`,
                      props.payload.channel
                    ]}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-2">
                {februaryChannels.slice(0, 3).map((channel, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    />
                    <span className="text-gray-700">{channel.channel}: {channel.percentage.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
