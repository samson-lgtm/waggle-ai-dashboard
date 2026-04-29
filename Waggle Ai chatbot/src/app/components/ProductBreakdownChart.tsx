import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ProductBreakdown } from '../types/ticket';

interface ProductBreakdownChartProps {
  data: ProductBreakdown[];
}

export function ProductBreakdownChart({ data }: ProductBreakdownChartProps) {
  // Aggregate by product name to ensure uniqueness
  const aggregatedData = data.reduce((acc, item) => {
    const existing = acc.find(d => d.product === item.product);
    if (existing) {
      existing.count += item.count;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, [] as ProductBreakdown[]);

  // Take top 10 products
  const topProducts = aggregatedData.slice(0, 10);
  const totalEscalations = aggregatedData.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Breakdown (Human Handled)</CardTitle>
        <p className="text-sm text-gray-600 mt-1">
          Human escalations: {totalEscalations.toLocaleString()} {topProducts.length < aggregatedData.length && `(showing top ${topProducts.length})`}
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProducts}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="product" 
              tick={{ fontSize: 11 }}
              stroke="#6b7280"
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              label={{ value: 'Count', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
            />
            <Tooltip 
              formatter={(value: number) => [`${value} escalations`, 'Count']}
              contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px' }}
            />
            <Bar dataKey="count" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}