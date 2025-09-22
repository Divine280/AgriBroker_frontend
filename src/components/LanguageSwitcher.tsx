import { useLanguage, Language } from './LanguageContext';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
  shortName: string;
}

const languageOptions: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    shortName: 'EN'
  },
  {
    code: 'rw',
    name: 'Kinyarwanda',
    flag: '🇷🇼',
    shortName: 'RW'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    shortName: 'FR'
  }
];

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
  showLabel?: boolean;
}

export function LanguageSwitcher({ variant = 'default', className = '', showLabel = false }: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage, t } = useLanguage();
  
  const currentOption = languageOptions.find(option => option.code === currentLanguage);

  return (
    <div className={`relative ${className}`}>
      {showLabel && (
        <div className="text-xs text-gray-600 mb-1 text-center font-medium">
          {t.language || 'Language'}
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {variant === 'compact' ? (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-10 px-3 bg-white border-2 border-[#00AEEF]/20 text-gray-700 hover:bg-[#00AEEF]/5 hover:border-[#00AEEF]/40 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Globe className="w-4 h-4 mr-2 text-[#00AEEF]" />
              <span className="text-lg mr-1">{currentOption?.flag}</span>
              <span className="text-sm font-medium">{currentOption?.shortName}</span>
              <ChevronDown className="w-4 h-4 ml-1 text-[#00AEEF]" />
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-11 px-4 bg-white border-2 border-[#00AEEF]/30 text-gray-700 hover:bg-[#00AEEF]/5 hover:border-[#00AEEF]/50 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Globe className="w-5 h-5 mr-2 text-[#00AEEF]" />
              <span className="text-xl mr-2">{currentOption?.flag}</span>
              <span className="hidden sm:inline font-medium text-base">{currentOption?.name}</span>
              <span className="sm:hidden font-medium text-base">{currentOption?.shortName}</span>
              <ChevronDown className="w-4 h-4 ml-2 text-[#00AEEF]" />
            </Button>
          )}
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          align="end" 
          className="w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-1"
        >
          <div className="px-3 py-2 border-b border-gray-100">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {t.language}
            </p>
          </div>
          
          {languageOptions.map((option) => (
            <DropdownMenuItem
              key={option.code}
              onClick={() => setLanguage(option.code)}
              className={`
                flex items-center px-3 py-2 text-sm cursor-pointer rounded-md mx-1 my-0.5
                hover:bg-gray-50 focus:bg-gray-50 transition-colors
                ${currentLanguage === option.code ? 'bg-[#00AEEF]/10 text-[#00AEEF]' : 'text-gray-700'}
              `}
            >
              <span className="text-lg mr-3">{option.flag}</span>
              <span className="flex-1 font-medium">{option.name}</span>
              {currentLanguage === option.code && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-[#00AEEF] text-white text-xs px-2 py-0.5"
                >
                  Active
                </Badge>
              )}
            </DropdownMenuItem>
          ))}
          
          <div className="border-t border-gray-100 mt-1 pt-2 px-3 pb-2">
            <p className="text-xs text-gray-500">
              Rwanda's official languages
            </p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}