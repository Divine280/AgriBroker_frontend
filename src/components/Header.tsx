import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { AgroDreamersLogo } from './AgroDreamersLogo';
import { 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  MapPin,
  Sprout
} from 'lucide-react';

interface HeaderProps {
  userType?: 'farmer' | 'buyer' | 'broker' | 'admin';
  userName?: string;
  notifications?: number;
}

export function Header({ userType = 'farmer', userName = 'Jean Baptiste', notifications = 3 }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const getUserTypeColor = () => {
    switch (userType) {
      case 'farmer': return 'bg-[#007749] text-white';
      case 'buyer': return 'bg-[#00AEEF] text-white';
      case 'broker': return 'bg-[#FFD100] text-black';
      case 'admin': return 'bg-gray-800 text-white';
      default: return 'bg-[#007749] text-white';
    }
  };

  return (
    <header className="bg-[#00AEEF] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <AgroDreamersLogo className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold">AgriConnect Rwanda</h1>
              <p className="text-xs text-blue-100">{t.empoweringFarmers}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-blue-600 hover:text-white">
              {userType === 'admin' ? t.adminDashboard : userType === 'farmer' ? t.farmerPanel : userType === 'buyer' ? t.buyerPanel : t.brokerPanel}
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-600 hover:text-white">
              {t.marketplace}
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-600 hover:text-white">
              {t.transactions}
            </Button>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Kigali, Rwanda</span>
            </div>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative text-white hover:bg-blue-600">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-[#FFD100] text-black text-xs min-w-5 h-5 rounded-full p-0 flex items-center justify-center">
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-3 cursor-pointer">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-white text-[#00AEEF]">
                      {userName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">{userName}</p>
                    <Badge variant="secondary" className={`text-xs ${getUserTypeColor()}`}>
                      {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </Badge>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  {t.profile}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  {t.settings}
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  {t.logout}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-600 pt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                {userType === 'admin' ? t.adminDashboard : userType === 'farmer' ? t.farmerPanel : userType === 'buyer' ? t.buyerPanel : t.brokerPanel}
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                {t.marketplace}
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                {t.transactions}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}