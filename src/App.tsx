import { useState } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AdminDashboard } from './components/AdminDashboard';
import { FarmerPanel } from './components/FarmerPanel';
import { BuyerPanel } from './components/BuyerPanel';
import { BrokerPanel } from './components/BrokerPanel';
import { FarmerRegistration } from './components/FarmerRegistration';
import { AgroDreamersLogo } from './components/AgroDreamersLogo';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Home, 
  BarChart3, 
  Sprout, 
  Package, 
  Users, 
  User,
  UserPlus
} from 'lucide-react';
import agroLogo from 'figma:asset/345d11e722834e0e0a4b87978bd82fd72f0ecd47.png';

type UserType = 'home' | 'admin' | 'farmer' | 'buyer' | 'broker' | 'farmer-registration';

function AppContent() {
  const [currentView, setCurrentView] = useState<UserType>('home');
  const [userType, setUserType] = useState<'farmer' | 'buyer' | 'broker' | 'admin'>('farmer');
  const { t } = useLanguage();

  const navigationItems = [
    { id: 'home', label: t.home, icon: Home },
    { id: 'farmer-registration', label: t.farmerRegistration, icon: UserPlus },
    { id: 'admin', label: t.adminDashboard, icon: BarChart3 },
    { id: 'farmer', label: t.farmerPanel, icon: Sprout },
    { id: 'buyer', label: t.buyerPanel, icon: Package },
    { id: 'broker', label: t.brokerPanel, icon: Users }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onJoinAsFarmer={() => setCurrentView('farmer-registration')} />;
      case 'farmer-registration':
        return <FarmerRegistration />;
      case 'admin':
        return <AdminDashboard />;
      case 'farmer':
        return <FarmerPanel />;
      case 'buyer':
        return <BuyerPanel />;
      case 'broker':
        return <BrokerPanel />;
      default:
        return <HomePage onJoinAsFarmer={() => setCurrentView('farmer-registration')} />;
    }
  };

  const getUserTypeFromView = (view: UserType) => {
    switch (view) {
      case 'admin':
        return 'admin';
      case 'farmer':
        return 'farmer';
      case 'buyer':
        return 'buyer';
      case 'broker':
        return 'broker';
      default:
        return 'farmer';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Agro Dreamers Logo - Fixed top left */}
      <div className="fixed top-4 left-4 z-50">
        <img 
          src={agroLogo} 
          alt="Agro Dreamers" 
          className="h-32 w-auto object-contain"
        />
      </div>

      {/* Language Switcher - Fixed top right with enhanced visibility */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-xl border border-[#00AEEF]/20 language-switcher-pulse">
          <LanguageSwitcher variant="compact" showLabel={true} />
        </div>
      </div>

      {currentView !== 'home' && currentView !== 'farmer-registration' && (
        <Header 
          userType={getUserTypeFromView(currentView)} 
          userName="Jean Baptiste"
          notifications={3}
        />
      )}

      {/* Demo Navigation - Only for demonstration */}
      {currentView !== 'home' && currentView !== 'farmer-registration' && (
        <div className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                {t.demoNavigation}
              </Badge>
              <div className="flex flex-wrap gap-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentView(item.id as UserType)}
                    className="text-xs"
                  >
                    <item.icon className="w-3 h-3 mr-1" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <main className={currentView === 'home' || currentView === 'farmer-registration' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}>
        {renderContent()}
      </main>

      {/* Footer - Only show on homepage */}
      {currentView === 'home' && (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold">AgriConnect Rwanda</h3>
                </div>
                <p className="text-gray-400">
                  {t.empoweringFarmers}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t.forFarmers}</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>{t.listProducts}</li>
                  <li>{t.getFairPrices}</li>
                  <li>{t.securePayments}</li>
                  <li>{t.marketAccess}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t.forBuyers}</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>{t.qualityProducts}</li>
                  <li>{t.directFromFarmers}</li>
                  <li>{t.bulkOrders}</li>
                  <li>{t.verifiedSuppliers}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t.support}</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>{t.helpCenter}</li>
                  <li>{t.contactUs}</li>
                  <li>{t.training}</li>
                  <li>{t.governmentPartners}</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>{t.copyrightText}</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}