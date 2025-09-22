import { useLanguage } from './LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  ResponsiveContainer
} from 'recharts';
import { 
  Users, 
  DollarSign, 
  Package, 
  TrendingUp, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye
} from 'lucide-react';

export function AdminDashboard() {
  const { t } = useLanguage();
  
  const stats = [
    {
      title: t.totalFarmers,
      value: '12,450',
      change: '+180',
      changePercent: '+1.5%',
      icon: Users,
      color: 'text-[#007749]',
      bgColor: 'bg-[#007749]/10'
    },
    {
      title: t.totalBuyers,
      value: '3,240',
      change: '+45',
      changePercent: '+1.4%',
      icon: Package,
      color: 'text-[#00AEEF]',
      bgColor: 'bg-[#00AEEF]/10'
    },
    {
      title: `${t.totalTransactions} (RWF)`,
      value: '2.1B',
      change: '+125M',
      changePercent: '+6.3%',
      icon: DollarSign,
      color: 'text-[#FFD100]',
      bgColor: 'bg-[#FFD100]/10'
    },
    {
      title: `${t.revenue}`,
      value: '45.2M',
      change: '+2.8M',
      changePercent: '+6.6%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 1200, taxes: 120 },
    { month: 'Feb', revenue: 1400, taxes: 140 },
    { month: 'Mar', revenue: 1600, taxes: 160 },
    { month: 'Apr', revenue: 1800, taxes: 180 },
    { month: 'May', revenue: 2000, taxes: 200 },
    { month: 'Jun', revenue: 2100, taxes: 210 }
  ];

  const transactionData = [
    { name: 'Coffee', value: 35, color: '#007749' },
    { name: 'Tea', value: 25, color: '#00AEEF' },
    { name: 'Maize', value: 20, color: '#FFD100' },
    { name: 'Beans', value: 12, color: '#10b981' },
    { name: 'Others', value: 8, color: '#6b7280' }
  ];

  const recentTransactions = [
    {
      id: 'TXN-001',
      farmer: 'Marie Uwimana',
      buyer: 'Kigali Coffee Co.',
      product: 'Coffee Beans',
      amount: '450,000 RWF',
      status: 'completed',
      time: '2 hours ago'
    },
    {
      id: 'TXN-002',
      farmer: 'Jean Baptiste',
      buyer: 'East Africa Tea',
      product: 'Tea Leaves',
      amount: '320,000 RWF',
      status: 'pending',
      time: '4 hours ago'
    },
    {
      id: 'TXN-003',
      farmer: 'Grace Mukamana',
      buyer: 'Rwanda Maize Ltd',
      product: 'Maize',
      amount: '180,000 RWF',
      status: 'disputed',
      time: '6 hours ago'
    }
  ];

  const activeAgents = [
    { name: 'Kigali Central', agents: 45, dispatched: 38, efficiency: 85 },
    { name: 'Northern Province', agents: 32, dispatched: 28, efficiency: 88 },
    { name: 'Eastern Province', agents: 28, dispatched: 22, efficiency: 79 },
    { name: 'Western Province', agents: 35, dispatched: 30, efficiency: 86 },
    { name: 'Southern Province', agents: 40, dispatched: 35, efficiency: 88 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-[#007749] text-white"><CheckCircle className="w-3 h-3 mr-1" />{t.completedOrders}</Badge>;
      case 'pending':
        return <Badge className="bg-[#FFD100] text-black"><Clock className="w-3 h-3 mr-1" />{t.pending}</Badge>;
      case 'disputed':
        return <Badge variant="destructive"><AlertTriangle className="w-3 h-3 mr-1" />{t.disputeResolution}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    <Badge className="bg-green-100 text-green-700">{stat.changePercent}</Badge>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-[#00AEEF]" />
              <span>{t.revenue} & {t.analytics}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#00AEEF" 
                  strokeWidth={3}
                  name="Revenue (M RWF)"
                />
                <Line 
                  type="monotone" 
                  dataKey="taxes" 
                  stroke="#007749" 
                  strokeWidth={3}
                  name="Taxes (M RWF)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Transaction Distribution */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-[#007749]" />
              <span>{t.products}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={transactionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({name, value}) => `${name} ${value}%`}
                >
                  {transactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transactions">{t.transactions}</TabsTrigger>
          <TabsTrigger value="agents">{t.agents}</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{t.transactions}</span>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  {t.view} {t.total}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{transaction.id}</span>
                        {getStatusBadge(transaction.status)}
                      </div>
                      <p className="text-sm text-gray-600">
                        {transaction.farmer} → {transaction.buyer}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">{transaction.amount}</p>
                      <p className="text-sm text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#00AEEF]" />
                <span>{t.agents} {t.status}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeAgents.map((region, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{region.name}</h4>
                      <Badge className={`${region.efficiency >= 85 ? 'bg-[#007749]' : 'bg-[#FFD100] text-black'}`}>
                        {region.efficiency}% Efficiency
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Total Agents</p>
                        <p className="font-semibold">{region.agents}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Dispatched</p>
                        <p className="font-semibold">{region.dispatched}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Available</p>
                        <p className="font-semibold">{region.agents - region.dispatched}</p>
                      </div>
                    </div>
                    <Progress value={region.efficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}