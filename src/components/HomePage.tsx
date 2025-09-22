import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import rwandanFarmersImage from 'figma:asset/71159552b7aa63e328408eedad28c6040d952149.png';
import { 
  Users, 
  TrendingUp, 
  Package, 
  DollarSign, 
  Sprout, 
  Globe, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface HomePageProps {
  onJoinAsFarmer?: () => void;
}

export function HomePage({ onJoinAsFarmer }: HomePageProps) {
  const { t } = useLanguage();
  const stats = [
    { icon: Users, label: 'Farmers Onboarded', value: '12,450', growth: '+15%' },
    { icon: Package, label: 'Goods Traded (tons)', value: '45.2K', growth: '+22%' },
    { icon: DollarSign, label: 'Total Value (RWF)', value: '2.1B', growth: '+18%' },
    { icon: TrendingUp, label: 'Active Transactions', value: '1,234', growth: '+12%' }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Market Access',
      description: 'Connect with buyers across Rwanda and East Africa'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Government-backed secure transaction processing'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Verified products with quality certifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00AEEF] to-[#007749] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4 mt-20 lg:mt-16">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t.heroTitle}
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  {t.digitalMarketplace}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#FFD100] text-black hover:bg-yellow-400 text-lg px-8 py-6"
                  onClick={onJoinAsFarmer}
                >
                  <Sprout className="mr-2 h-5 w-5" />
                  {t.joinAsFarmer}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#00AEEF] text-lg px-8 py-6"
                >
                  <Package className="mr-2 h-5 w-5" />
                  {t.joinAsBuyer}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD100]" />
                  <span>{t.governmentVerified}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD100]" />
                  <span>{t.securePayments}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src={rwandanFarmersImage}
                  alt="Rwandan farmers showcasing their fresh produce"
                  className="rounded-xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD100] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.transformingAgriculture}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.realTimeImpact}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-8 w-8 text-[#00AEEF]" />
                    <Badge className="bg-[#007749] text-white">
                      {stat.growth}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.whyChoose}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.builtForRwandan}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#00AEEF] to-[#007749] rounded-xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#007749] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Agriculture Business?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of farmers and buyers already using AgriConnect Rwanda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#FFD100] text-black hover:bg-yellow-400 text-lg px-8 py-6"
                onClick={onJoinAsFarmer}
              >
                {t.getStarted}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#00AEEF] text-lg px-8 py-6"
              >
                {t.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}