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
import { 
  Users, 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Clock, 
  PaintRoller 
} from 'lucide-react';

const PaintingContractorDashboard = () => {
  // Annual Financial Data
  const annualFinancials = [
    { 
      category: 'Total Annual Revenue', 
      value: 2400000, 
      icon: <DollarSign className="text-blue-500" /> 
    },
    { 
      category: 'Net Profit', 
      value: 432000, 
      icon: <TrendingUp className="text-green-500" /> 
    },
    { 
      category: 'Weekly Sales Target', 
      value: 60000, 
      icon: <PaintRoller className="text-purple-500" /> 
    }
  ];

  // Expense Breakdown
  const expenseData = [
    { name: 'Labor & Materials', value: 1200000, color: '#3182ce' },
    { name: 'Sales & Production Payroll', value: 288000, color: '#48bb78' },
    { name: 'Marketing', value: 240000, color: '#9f7aea' },
    { name: 'Overhead', value: 240000, color: '#ed64a6' },
    { name: 'Net Profit', value: 432000, color: '#38b2ac' }
  ];

  // Team Composition
  const teamData = [
    { role: 'Office Manager', count: 1, color: '#3182ce' },
    { role: 'Project Managers', count: 2, color: '#48bb78' },
    { role: 'Sales Reps', count: 2, color: '#9f7aea' },
    { role: 'Painters', count: '10-12', color: '#ed64a6' }
  ];

  // Weekly Performance Metrics
  const weeklyMetrics = [
    { metric: 'Estimates', target: 30, color: '#3182ce' },
    { metric: 'Closed Sales', target: 12, color: '#48bb78' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Key Financial Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Annual Financial Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              {annualFinancials.map((item, index) => (
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

        {/* Expense Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Team Composition */}
        <Card>
          <CardHeader>
            <CardTitle>Team Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={teamData}
                layout="vertical"
                margin={{ left: 20, right: 20, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="role" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#3182ce" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance Targets</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={weeklyMetrics}
                layout="vertical"
                margin={{ left: 20, right: 20, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="metric" type="category" />
                <Tooltip />
                <Bar dataKey="target" fill="#3182ce" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Key Performance Indicators */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Users className="mb-2 text-blue-500" />
                <h3 className="text-sm text-gray-500">Total Team Size</h3>
                <p className="text-xl font-bold">15-17 People</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Briefcase className="mb-2 text-green-500" />
                <h3 className="text-sm text-gray-500">Weekly Sales</h3>
                <p className="text-xl font-bold">$60,000</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Clock className="mb-2 text-purple-500" />
                <h3 className="text-sm text-gray-500">Owner Time Invested</h3>
                <p className="text-xl font-bold">15 Hours/Week</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <TrendingUp className="mb-2 text-red-500" />
                <h3 className="text-sm text-gray-500">Net Profit Margin</h3>
                <p className="text-xl font-bold">18%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaintingContractorDashboard;
