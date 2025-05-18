
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, LineChart } from 'recharts';

const ManagerDashboard = () => {
  // Sample data for charts
  const taskCompletionData = [
    { name: 'Production', completed: 85, total: 100 },
    { name: 'Maintenance', completed: 65, total: 100 },
    { name: 'Research', completed: 90, total: 100 },
    { name: 'Distribution', completed: 75, total: 100 },
  ];

  const energyUsageData = [
    { day: 'Mon', usage: 65, efficiency: 78 },
    { day: 'Tue', usage: 72, efficiency: 82 },
    { day: 'Wed', usage: 78, efficiency: 88 },
    { day: 'Thu', usage: 74, efficiency: 84 },
    { day: 'Fri', usage: 80, efficiency: 90 },
    { day: 'Sat', usage: 60, efficiency: 76 },
    { day: 'Sun', usage: 55, efficiency: 72 },
  ];

  const taskList = [
    { id: 1, name: 'Reactor Core Maintenance', assigned: 'Team Alpha', priority: 'High', deadline: '2025-05-25', status: 'In Progress' },
    { id: 2, name: 'Energy Distribution Optimization', assigned: 'Team Beta', priority: 'Medium', deadline: '2025-06-02', status: 'Not Started' },
    { id: 3, name: 'Lab Equipment Calibration', assigned: 'Team Gamma', priority: 'Low', deadline: '2025-05-20', status: 'Completed' },
    { id: 4, name: 'Safety Protocol Update', assigned: 'Team Alpha', priority: 'High', deadline: '2025-05-19', status: 'In Progress' },
  ];
  
  const recommendations = [
    { id: 1, title: 'Optimize Team Alpha Schedule', description: 'Analysis shows a 15% potential efficiency gain by adjusting shift patterns.', impact: 'Medium' },
    { id: 2, title: 'Reallocate Resources to Sector B', description: 'Energy output in Sector B can be increased with minimal additional labor.', impact: 'High' },
    { id: 3, title: 'Training Focus: New Cooling System', description: 'Team performance would benefit from targeted training on the new cooling systems.', impact: 'Medium' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Sidebar role="manager" />
      
      <div className="flex-1">
        <Header role="manager" title="Labor Manager Dashboard" />
        
        <main className="p-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">8</div>
                <p className="text-sm text-white/70">24 team members</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Task Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">78%</div>
                <p className="text-sm text-green-400">+5% from last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Labor Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">92%</div>
                <p className="text-sm text-amber-400">-2% from target</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Energy Production</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-electric-blue">4.2 GW</div>
                <p className="text-sm text-green-400">+10% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Task Management and Energy Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Task Completion Status</CardTitle>
                <CardDescription>Progress by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {taskCompletionData.map((task) => (
                    <div key={task.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">{task.name}</span>
                        <span className="text-sm text-white/70">{task.completed}%</span>
                      </div>
                      <Progress value={task.completed} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Energy Usage Analytics</CardTitle>
                <CardDescription>Usage vs. efficiency this week</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={energyUsageData}>
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
                      dataKey="usage" 
                      name="Usage" 
                      stroke="#0EA5E9" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      name="Efficiency" 
                      stroke="#7E69AB" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Tasks List */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Current Tasks</CardTitle>
              <CardDescription>Active and upcoming assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Task Name</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Assigned To</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Priority</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Deadline</th>
                      <th className="py-3 px-4 text-sm font-medium text-white/70">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskList.map((task) => (
                      <tr key={task.id} className="border-b border-white/5">
                        <td className="py-3 px-4 text-sm text-white">{task.name}</td>
                        <td className="py-3 px-4 text-sm text-white">{task.assigned}</td>
                        <td className="py-3 px-4 text-sm">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs ${
                              task.priority === 'High' 
                                ? 'bg-red-500/20 text-red-400' 
                                : task.priority === 'Medium'
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-green-500/20 text-green-400'
                            }`}
                          >
                            {task.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-white">{task.deadline}</td>
                        <td className="py-3 px-4 text-sm">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs ${
                              task.status === 'Completed' 
                                ? 'bg-green-500/20 text-green-400' 
                                : task.status === 'In Progress'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : 'bg-gray-500/20 text-gray-400'
                            }`}
                          >
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="ml-auto">
                View All Tasks
              </Button>
            </CardFooter>
          </Card>
          
          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Recommendations</CardTitle>
              <CardDescription>Suggestions to optimize labor deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="p-4 rounded-lg glass-effect">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{rec.title}</h4>
                      <span 
                        className={`px-2 py-1 rounded-full text-xs ${
                          rec.impact === 'High' 
                            ? 'bg-electric-blue/20 text-electric-blue' 
                            : rec.impact === 'Medium'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {rec.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-white/70">{rec.description}</p>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm">Apply</Button>
                      <Button variant="outline" size="sm">Dismiss</Button>
                    </div>
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

export default ManagerDashboard;
