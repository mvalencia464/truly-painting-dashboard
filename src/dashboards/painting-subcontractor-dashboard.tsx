import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, Users, DollarSign, Palette } from 'lucide-react';

const PaintingSubcontractorMonthlyDashboard = () => {
  // Monthly Financial Data (4-5 weeks projection)
  const monthlyFinancials = [
    { category: 'Total Jobs', value: 80000, icon: <DollarSign className="text-blue-500" /> },
    { category: 'Materials', value: 12000, icon: <Palette className="text-green-500" /> },
    { category: 'Labor Costs', value: 20000, icon: <Users className="text-purple-500" /> },
    { category: 'Profit', value: 8000, icon: <CreditCard className="text-emerald-500" /> }
  ];

  // Monthly Labor Breakdown
  const laborData = [
    { name: 'Subcontractor Labor', value: 20000, color: '#8884d8' },
    { name: 'Profit', value: 8000, color: '#82ca9d' }
  ];

  // Monthly Detailed Breakdown
  const monthlyDetailData = [
    { 
      category: 'Weekly Average', 
      totalJobs: 20000, 
      materials: 3000, 
      laborCosts: 5000, 
      profit: 2000 
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Financial Overview Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Financial Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {monthlyFinancials.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-xl font-bold">${item.value.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Labor and Profit Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Labor & Profit Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={laborData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {laborData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Monthly Breakdown */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Monthly Financial Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={monthlyDetailData}
                layout="vertical"
                margin={{ left: 20, right: 20, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalJobs" fill="#3182ce" name="Total Jobs" stackId="a" />
                <Bar dataKey="materials" fill="#48bb78" name="Materials" stackId="a" />
                <Bar dataKey="laborCosts" fill="#9f7aea" name="Labor Costs" stackId="a" />
                <Bar dataKey="profit" fill="#38b2ac" name="Profit" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span>Monthly Job Capacity</span>
                <span className="font-bold">4-5 Jobs per Week</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Hourly Labor Rate</span>
                <span className="font-bold">$20/hour</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Profit Margin</span>
                <span className="font-bold">10%</span>
              </div>
              <div className="flex justify-between">
                <span>Team Size</span>
                <span className="font-bold">4-5 Painters</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaintingSubcontractorMonthlyDashboard;
