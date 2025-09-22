import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  DollarSign, 
  Star, 
  TrendingUp, 
  Users, 
  Package, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Award,
  Target
} from 'lucide-react';

export function BrokerPanel() {
  const brokerStats = {
    totalEarnings: '850,000',
    commission: '12.5',
    completedDeals: 156,
    rating: 4.7,
    successRate: 94
  };

  const recentTransactions = [
    {
      id: 'BR-001',
      farmer: 'Marie Uwimana',
      buyer: 'Kigali Coffee Co.',
      product: 'Coffee Beans',
      quantity: '500 kg',
      value: '1,250,000',
      commission: '62,500',
      status: 'completed',
      date: '2024-09-01',
      location: 'Nyabihu District'
    },
    {
      id: 'BR-002',
      farmer: 'Jean Baptiste',
      buyer: 'East Africa Tea',
      product: 'Tea Leaves',
      quantity: '300 kg',
      value: '540,000',
      commission: '27,000',
      status: 'in-progress',
      date: '2024-09-02',
      location: 'Nyamasheke District'
    },
    {
      id: 'BR-003',
      farmer: 'Grace Mukamana',
      buyer: 'Rwanda Grains Ltd',
      product: 'White Maize',
      quantity: '1,200 kg',
      value: '960,000',
      commission: '48,000',
      status: 'pending',
      date: '2024-09-02',
      location: 'Gatsibo District'
    }
  ];

  const monthlyEarnings = [
    { month: 'Jan', earnings: 650000 },
    { month: 'Feb', earnings: 720000 },
    { month: 'Mar', earnings: 680000 },
    { month: 'Apr', earnings: 750000 },
    { month: 'May', earnings: 820000 },
    { month: 'Jun', earnings: 850000 }
  ];

  const achievements = [
    {
      title: 'Top Performer',
      description: 'Highest commission this month',
      icon: Award,
      color: 'text-[#FFD100]',
      bgColor: 'bg-[#FFD100]/10'
    },
    {
      title: 'Trust Builder',
      description: '100+ successful transactions',
      icon: CheckCircle,
      color: 'text-[#007749]',
      bgColor: 'bg-[#007749]/10'
    },
    {
      title: 'Quick Closer',
      description: 'Average deal time: 2.3 days',
      icon: Target,
      color: 'text-[#00AEEF]',
      bgColor: 'bg-[#00AEEF]/10'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-[#007749] text-white"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-[#00AEEF] text-white"><Clock className="w-3 h-3 mr-1" />In Progress</Badge>;
      case 'pending':
        return <Badge className="bg-[#FFD100] text-black"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Broker Profile Header */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-[#00AEEF] to-blue-600 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarImage src="/placeholder-broker.jpg" />
              <AvatarFallback className="bg-white text-[#00AEEF] text-2xl">JM</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Jean Claude Mugisha</h2>
                  <p className="text-blue-100 text-lg">Certified Agricultural Broker</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-[#FFD100] fill-current" />
                      <span className="font-semibold">{brokerStats.rating}</span>
                      <span className="text-blue-100">(245 reviews)</span>
                    </div>
                    <Badge className="bg-[#007749] text-white">
                      Level 5 Broker
                    </Badge>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <Button variant="secondary" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">{brokerStats.totalEarnings} RWF</p>
              </div>
              <DollarSign className="h-8 w-8 text-[#007749]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Commission Rate</p>
                <p className="text-2xl font-bold text-gray-900">{brokerStats.commission}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-[#00AEEF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed Deals</p>
                <p className="text-2xl font-bold text-gray-900">{brokerStats.completedDeals}</p>
              </div>
              <Package className="h-8 w-8 text-[#FFD100]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">{brokerStats.successRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-[#007749]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Clients</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <Users className="h-8 w-8 text-[#00AEEF]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-[#FFD100]" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className={`p-3 rounded-xl ${achievement.bgColor}`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-[#00AEEF]" />
            <span>Monthly Earnings Trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyEarnings.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium w-12">{data.month}</span>
                <div className="flex-1 mx-4">
                  <Progress 
                    value={(data.earnings / 900000) * 100} 
                    className="h-3"
                  />
                </div>
                <span className="text-sm font-semibold w-24 text-right">
                  {data.earnings.toLocaleString()} RWF
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-[#007749]" />
            <span>Recent Transactions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold">{transaction.id}</span>
                      {getStatusBadge(transaction.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Farmer → Buyer</p>
                        <p className="font-medium">{transaction.farmer} → {transaction.buyer}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Product & Quantity</p>
                        <p className="font-medium">{transaction.product} • {transaction.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{transaction.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <p className="text-lg font-bold text-gray-900">{transaction.value} RWF</p>
                    <p className="text-sm text-[#007749] font-semibold">
                      Commission: {transaction.commission} RWF
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {transaction.status === 'pending' && (
                        <Button size="sm" className="bg-[#007749] hover:bg-green-700">
                          Follow Up
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}