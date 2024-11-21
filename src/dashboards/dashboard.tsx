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

const PaintingSubcontractorDashboard = () => {
  // Weekly Financial Data
  const weeklyFinancials = [
    { category: 'Total Jobs', value: 20000, icon: <DollarSign className="text-blue-500" /> },
    { category: 'Materials', value: 3000, icon: <Palette className="text-green-500" /> },
    { category: 'Labor Costs', value: 5000, icon: <Users className="text-purple-500" /> },
    { category: 'Profit', value: 2000, icon: <CreditCard className="text-emerald-500" /> }
  ];

  // Labor Breakdown
  const laborData = [
    { name: 'Subcontractor Labor', value: 5000, color: '#8884d8' },
    { name: 'Profit', value: 2000, color: '#82ca9d' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial Overview Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Financial Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {weeklyFinancials.map((item, index) => (
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

        {/* Labor and Profit Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Labor & Profit Distribution</CardTitle>
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

        {/* Weekly Job Value Bar Chart */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Weekly Financial Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={weeklyFinancials}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3182ce" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaintingSubcontractorDashboard;
