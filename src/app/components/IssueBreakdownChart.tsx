import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { IssueBreakdown } from '../types/ticket';

interface IssueBreakdownChartProps {
  data: IssueBreakdown[];
}

export function IssueBreakdownChart({ data }: IssueBreakdownChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Issue Types</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={data} 
            layout="vertical"
            margin={{ left: 120, right: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              type="number"
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              type="category"
              dataKey="issue" 
              tick={{ fontSize: 11 }}
              stroke="#6b7280"
              width={110}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px' }}
            />
            <Legend />
            <Bar dataKey="botCount" fill="#3b82f6" stackId="a" name="Bot Handled" radius={[0, 4, 4, 0]} />
            <Bar dataKey="humanCount" fill="#f97316" stackId="a" name="Human Handled" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
