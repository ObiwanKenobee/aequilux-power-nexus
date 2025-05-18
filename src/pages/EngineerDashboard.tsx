
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EngineerDashboard = () => {
  // Sample data for the charts
  const temperatureData = [
    { time: '00:00', value: 4200 },
    { time: '04:00', value: 4300 },
    { time: '08:00', value: 4400 },
    { time: '12:00', value: 4550 },
    { time: '16:00', value: 4500 },
    { time: '20:00', value: 4400 },
    { time: '24:00', value: 4350 },
  ];

  const outputData = [
    { time: '00:00', value: 850 },
    { time: '04:00', value: 830 },
    { time: '08:00', value: 860 },
    { time: '12:00', value: 900 },
    { time: '16:00', value: 870 },
    { time: '20:00', value: 840 },
    { time: '24:00', value: 820 },
  ];

  const stabilityData = [
    { time: '00:00', value: 98 },
    { time: '04:00', value: 97 },
    { time: '08:00', value: 99 },
    { time: '12:00', value: 98 },
    { time: '16:00', value: 96 },
    { time: '20:00', value: 97 },
    { time: '24:00', value: 98 },
  ];

  const alerts = [
    { id: 1, message: 'Plasma stability fluctuation detected', level: 'warning', time: '10:23 AM' },
    { id: 2, message: 'Cooling system maintenance recommended', level: 'info', time: 'Yesterday' },
    { id: 3, message: 'Power output optimization possible', level: 'success', time: '2 days ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Sidebar role="engineer" />
      
      <div className="flex-1">
        <Header role="engineer" title="Engineer Dashboard" />
        
        <main className="p-6">
          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Core Temperature</CardTitle>
                <CardDescription>Current status: Optimal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">4,350 K</div>
                <p className="text-sm text-green-400">+2.5% from yesterday</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Power Output</CardTitle>
                <CardDescription>Current status: High</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">873 MW</div>
                <p className="text-sm text-amber-400">-1.2% from peak</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Plasma Stability</CardTitle>
                <CardDescription>Current status: Stable</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">98.2%</div>
                <p className="text-sm text-green-400">+0.5% from average</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Temperature Trend (24h)</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        borderColor: '#4B5563',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0EA5E9" 
                      fill="url(#temperatureGradient)"
                    />
                    <defs>
                      <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Power Output (24h)</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={outputData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        borderColor: '#4B5563',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#7E69AB" 
                      fill="url(#outputGradient)"
                    />
                    <defs>
                      <linearGradient id="outputGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>System notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className="flex items-center p-3 rounded-lg"
                    style={{ 
                      background: 'rgba(30, 41, 59, 0.5)',
                      borderLeft: `4px solid ${
                        alert.level === 'warning' 
                          ? '#F59E0B' 
                          : alert.level === 'success' 
                            ? '#10B981' 
                            : '#0EA5E9'
                      }` 
                    }}
                  >
                    <div className="mr-4">
                      {alert.level === 'warning' ? (
                        <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : alert.level === 'success' ? (
                        <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{alert.message}</p>
                    </div>
                    <div className="text-xs text-white/50">{alert.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default EngineerDashboard;
