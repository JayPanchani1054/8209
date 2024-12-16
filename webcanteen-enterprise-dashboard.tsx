import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { IndianRupee, Package, TrendingDown, TrendingUp, Truck, ChevronRight, Activity, DollarSign, Users, ShoppingCart } from 'lucide-react';

const WebCanteenDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const orderStatusData = [
    { name: 'Delivered', value: 860, color: '#0ea5e9' },
    { name: 'Cancelled', value: 348, color: '#ef4444' },
    { name: 'RTO', value: 361, color: '#f97316' },
    { name: 'Fulfillment Pending', value: 27, color: '#eab308' },
    { name: 'Misc', value: 26, color: '#6366f1' }
  ];

  const costBreakdown = [
    { name: 'Manufacturing', value: 387000, fill: '#0ea5e9' },
    { name: 'Marketing', value: 321482, fill: '#6366f1' },
    { name: 'Shipping', value: 92000, fill: '#f97316' }
  ];

  const orderFlow = [
    { name: 'Total Orders', value: 1622 },
    { name: 'After Cancellation', value: 1274 },
    { name: 'After RTO', value: 913 },
    { name: 'Delivered', value: 860 }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">WebCanteen</h1>
              <p className="mt-1 text-sm text-gray-500">Enterprise Performance Analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last Updated: December 16, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Executive Summary</CardTitle>
            <CardDescription>Key performance metrics and business insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Revenue</span>
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-2">{formatCurrency(861732)}</p>
                <p className="text-sm text-gray-600 mt-1">From delivered orders</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Net Profit</span>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-2">{formatCurrency(61250)}</p>
                <p className="text-sm text-gray-600 mt-1">7.1% Profit Margin</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-semibold">Orders</span>
                  <ShoppingCart className="h-5 w-5 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-2">1,622</p>
                <p className="text-sm text-gray-600 mt-1">53% Delivery Rate</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">RTO Rate</span>
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-2">28.3%</p>
                <p className="text-sm text-gray-600 mt-1">Post-cancellation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Status Distribution</CardTitle>
              <CardDescription>Overview of current order statuses</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    label={({ name, value, percent }) => 
                      `${name}: ${((value/1622)*100).toFixed(1)}%`
                    }
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Structure Analysis</CardTitle>
              <CardDescription>Breakdown of operational costs</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Bar dataKey="value" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Operational Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Flow Analysis</CardTitle>
            <CardDescription>Order progression through fulfillment stages</CardDescription>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderFlow}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  dot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Financial Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Gross Revenue</dt>
                  <dd className="font-semibold">{formatCurrency(1632667)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Net Revenue</dt>
                  <dd className="font-semibold">{formatCurrency(861732)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Total Costs</dt>
                  <dd className="font-semibold">{formatCurrency(800482)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Profit Margin</dt>
                  <dd className="font-semibold">7.1%</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operational Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Delivery Rate</dt>
                  <dd className="font-semibold">53.0%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Cancellation Rate</dt>
                  <dd className="font-semibold">21.5%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">RTO Rate</dt>
                  <dd className="font-semibold">28.3%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Prepaid Ratio</dt>
                  <dd className="font-semibold">9.0%</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Avg Order Value</dt>
                  <dd className="font-semibold">{formatCurrency(1005)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Cost per Order</dt>
                  <dd className="font-semibold">{formatCurrency(931)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Shipping per Order</dt>
                  <dd className="font-semibold">{formatCurrency(106.98)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Manufacturing Cost</dt>
                  <dd className="font-semibold">{formatCurrency(450)}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 WebCanteen. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Generated by Enterprise Analytics Platform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebCanteenDashboard;
