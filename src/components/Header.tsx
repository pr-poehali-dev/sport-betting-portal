import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  currentUser: any;
  onAuthClick: (mode: 'login' | 'register') => void;
  onAdminClick: () => void;
}

const Header = ({ currentUser, onAuthClick, onAdminClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="TrendingUp" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold">BetPro</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#predictions" className="hover:text-primary transition-colors font-medium">Прогнозы</a>
            <a href="#rating" className="hover:text-primary transition-colors font-medium">Рейтинг</a>
            <a href="#premium" className="hover:text-primary transition-colors font-medium">Премиум</a>
            <a href="#contacts" className="hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>

          <div className="flex items-center gap-3">
            {currentUser ? (
              <>
                <Button variant="ghost" size="icon">
                  <Icon name="Bell" size={20} />
                </Button>
                <Button variant="ghost" className="gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-white text-sm">
                      {currentUser.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">{currentUser.name}</span>
                </Button>
                {currentUser.isAdmin && (
                  <Button
                    onClick={onAdminClick}
                    className="gradient-accent hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Shield" className="mr-2" size={18} />
                    Админ
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => onAuthClick('login')}>
                  Вход
                </Button>
                <Button className="gradient-primary hover:opacity-90 transition-opacity" onClick={() => onAuthClick('register')}>
                  Регистрация
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
