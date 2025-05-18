
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const ExecutiveDashboard = () => {
  // Sample data for charts
  const marketData = [
    { month: 'Jan', energy: 4000, carbon: 2400 },
    { month: 'Feb', energy: 3000, carbon: 1398 },
    { month: 'Mar', energy: 2000, carbon: 9800 },
    { month: 'Apr', energy: 2780, carbon: 3908 },
    { month: 'May', energy: 1890, carbon: 4800 },
    { month: 'Jun', energy: 2390, carbon: 3800 },
  ];

  const environmentalData = [
    { name: 'Carbon Offset', value: 68 },
    { name: 'Community Impact', value: 22 },
    { name: 'Resource Conservation', value: 10 },
  ];

  const engagementData = [
    { day: 1, users: 200 },
    { day: 2, users: 300 },
    { day: 3, users: 280 },
    { day: 4, users: 320 },
    { day: 5, users: 350 },
    { day: 6, users: 400 },
    { day: 7, users: 450 },
  ];

  const COLORS = ['#0EA5E9', '#7E69AB', '#10B981'];

  const marketRegions = [
    { id: 1, region: 'North America', sales: '$4.2M', growth: '+14%', status: 'positive' },
    { id: 2, region: 'Europe', sales: '$3.8M', growth: '+8%', status: 'positive' },
    { id: 3, region: 'Asia Pacific', sales: '$2.9M', growth: '+22%', status: 'positive' },
    { id: 4, region: 'Latin America', sales: '$1.2M', growth: '-3%', status: 'negative' },
    { id: 5, region: 'Africa', sales: '$0.8M', growth: '+35%', status: 'positive' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Sidebar role="executive" />
      
      <div className="flex-1">
        <Header role="executive" title="Executive Dashboard" />
        
        <main className="p-6">
          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">$12.8M</div>
                <p className="text-sm text-green-400">+12% YTD</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Energy Production</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">28.5 GW</div>
                <p className="text-sm text-green-400">+18% YTD</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Carbon Offset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">1.2M tons</div>
                <p className="text-sm text-green-400">+24% YTD</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Market Share</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">18.3%</div>
                <p className="text-sm text-green-400">+2.5% YTD</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Market Stats Chart */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Energy Market Trends</CardTitle>
              <CardDescription>Monthly energy prices vs. carbon credits</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.9)',
                      borderColor: '#4B5563',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="energy" name="Energy Price ($/MWh)" fill="#0EA5E9" />
                  <Bar dataKey="carbon" name="Carbon Credits ($/ton)" fill="#7E69AB" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Environmental Impact and User Engagement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Environmental Impact */}
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact Breakdown</CardTitle>
                <CardDescription>Distribution of sustainability initiatives</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={environmentalData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {environmentalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        borderColor: '#4B5563',
                        color: '#F9FAFB'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* User Engagement */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Engagement</CardTitle>
                <CardDescription>Daily active users (last 7 days)</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        borderColor: '#4B5563',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Market Region Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Market Region Performance</CardTitle>
              <CardDescription>Sales figures by geographic region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Region</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Sales</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Growth</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketRegions.map((region) => (
                      <tr key={region.id} className="border-b border-white/5">
                        <td className="py-3 px-4 text-sm font-medium text-white">{region.region}</td>
                        <td className="py-3 px-4 text-sm text-white">{region.sales}</td>
                        <td className="py-3 px-4 text-sm text-white">{region.growth}</td>
                        <td className="py-3 px-4 text-sm">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs ${
                              region.status === 'positive' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {region.status === 'positive' ? 'Growing' : 'Declining'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
