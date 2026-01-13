import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import PredictionCard from '@/components/PredictionCard';
import AuthDialog from '@/components/AuthDialog';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const mockPredictions = [
    {
      id: 1,
      sport: '⚽ Футбол',
      match: 'Реал Мадрид vs Барселона',
      league: 'Ла Лига',
      prediction: 'Победа Реала',
      odds: 2.45,
      status: 'active',
      capper: 'ProBetter',
      capperWinRate: 87,
      time: '15:00',
      isPremium: false,
      analysis: 'Реал в отличной форме, 5 побед подряд'
    },
    {
      id: 2,
      sport: '🏀 Баскетбол',
      match: 'Lakers vs Warriors',
      league: 'NBA',
      prediction: 'Тотал больше 215.5',
      odds: 1.90,
      status: 'live',
      capper: 'BetKing',
      capperWinRate: 92,
      time: 'Live',
      isPremium: true,
      analysis: 'Обе команды показывают результативный баскетбол'
    },
    {
      id: 3,
      sport: '🎾 Теннис',
      match: 'Джокович vs Алькарас',
      league: 'Australian Open',
      prediction: 'Джокович 2:0',
      odds: 3.20,
      status: 'won',
      capper: 'ProBetter',
      capperWinRate: 87,
      time: 'Завершен',
      isPremium: false,
      analysis: 'Джокович доминирует на кортах Австралии'
    },
    {
      id: 4,
      sport: '⚽ Футбол',
      match: 'Манчестер Сити vs Ливерпуль',
      league: 'Premier League',
      prediction: 'Обе забьют',
      odds: 1.75,
      status: 'active',
      capper: 'BetKing',
      capperWinRate: 92,
      time: '19:30',
      isPremium: true,
      analysis: 'Атакующий футбол обеих команд'
    }
  ];

  const mockCappers = [
    { id: 1, name: 'BetKing', winRate: 92, profit: '+234%', predictions: 156, avatar: 'BK' },
    { id: 2, name: 'ProBetter', winRate: 87, profit: '+189%', predictions: 203, avatar: 'PB' },
    { id: 3, name: 'SportGuru', winRate: 84, profit: '+156%', predictions: 178, avatar: 'SG' },
    { id: 4, name: 'BetMaster', winRate: 81, profit: '+142%', predictions: 134, avatar: 'BM' },
    { id: 5, name: 'StakeWise', winRate: 79, profit: '+128%', predictions: 167, avatar: 'SW' }
  ];

  const handleAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleLogin = () => {
    setCurrentUser({ name: 'Пользователь', isAdmin: true });
    setIsAuthOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'won':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'live':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse';
      case 'lost':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'won':
        return 'Выигрыш';
      case 'live':
        return 'Live';
      case 'lost':
        return 'Проигрыш';
      default:
        return 'Активный';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentUser={currentUser} 
        onAuthClick={handleAuth}
        onAdminClick={() => setIsAdminPanelOpen(true)}
      />

      <section id="home" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 text-lg px-6 py-2 gradient-primary border-0">
              <Icon name="Zap" className="mr-2" size={18} />
              Прогнозы от профессионалов
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Выигрывай со <span className="text-gradient">лучшими</span> капперами
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Получай точные прогнозы на спортивные события от экспертов с проверенной статистикой
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <Icon name="Rocket" className="mr-2" size={22} />
                Начать выигрывать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="BarChart3" className="mr-2" size={22} />
                Посмотреть статистику
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
                <div className="text-4xl font-bold text-gradient mb-2">92%</div>
                <div className="text-muted-foreground">Точность прогнозов</div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
                <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
                <div className="text-muted-foreground">Активных пользователей</div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-muted-foreground">Прогнозов в месяц</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="predictions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-4xl font-bold mb-2">Актуальные прогнозы</h3>
              <p className="text-muted-foreground">Выбери прогноз и начинай зарабатывать</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="Filter" size={18} />
              Фильтры
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-4 bg-card">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="active">Активные</TabsTrigger>
              <TabsTrigger value="live">Live</TabsTrigger>
              <TabsTrigger value="won">Выигрыши</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockPredictions.map((pred) => (
              <PredictionCard
                key={pred.id}
                prediction={pred}
                getStatusColor={getStatusColor}
                getStatusText={getStatusText}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="rating" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Рейтинг капперов</h3>
            <p className="text-muted-foreground text-lg">Топ экспертов по статистике выигрышей</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {mockCappers.map((capper, index) => (
              <Card key={capper.id} className="p-6 bg-card hover:border-primary/50 transition-all group">
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-primary text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="gradient-secondary text-white font-bold text-xl">
                      {capper.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {capper.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{capper.predictions} прогнозов</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{capper.winRate}%</div>
                    <div className="text-sm text-muted-foreground">Винрейт</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{capper.profit}</div>
                    <div className="text-sm text-muted-foreground">Профит</div>
                  </div>
                  <Button className="gradient-primary hover:opacity-90">
                    Подписаться
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="premium" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 gradient-accent border-0">
              <Icon name="Crown" className="mr-2" size={18} />
              Premium доступ
            </Badge>
            <h3 className="text-5xl font-bold mb-6">Получи доступ ко всем прогнозам</h3>
            <p className="text-xl text-muted-foreground mb-12">
              Эксклюзивные прогнозы от топовых капперов, аналитика в реальном времени и push-уведомления
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-8 bg-card/50 backdrop-blur border-border hover:scale-105 transition-transform">
                <Icon name="Sparkles" className="mx-auto mb-4 text-primary" size={48} />
                <h4 className="text-xl font-bold mb-2">Премиум прогнозы</h4>
                <p className="text-muted-foreground">Доступ к закрытым прогнозам</p>
              </Card>
              <Card className="p-8 bg-card/50 backdrop-blur border-border hover:scale-105 transition-transform">
                <Icon name="LineChart" className="mx-auto mb-4 text-accent" size={48} />
                <h4 className="text-xl font-bold mb-2">Расширенная аналитика</h4>
                <p className="text-muted-foreground">Статистика и графики</p>
              </Card>
              <Card className="p-8 bg-card/50 backdrop-blur border-border hover:scale-105 transition-transform">
                <Icon name="Bell" className="mx-auto mb-4 text-secondary" size={48} />
                <h4 className="text-xl font-bold mb-2">Push-уведомления</h4>
                <p className="text-muted-foreground">Мгновенные оповещения</p>
              </Card>
            </div>

            <Button size="lg" className="gradient-accent hover:opacity-90 transition-opacity text-xl px-12 py-8">
              <Icon name="Crown" className="mr-2" size={24} />
              Оформить Premium за 990₽/месяц
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">Остались вопросы?</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Свяжитесь с нами любым удобным способом
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Mail" size={20} />
                support@betpro.com
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Telegram
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 BetPro. Все права защищены.</p>
        </div>
      </footer>

      <AuthDialog
        isOpen={isAuthOpen}
        onOpenChange={setIsAuthOpen}
        authMode={authMode}
        onAuthModeChange={setAuthMode}
        onLogin={handleLogin}
      />

      <AdminPanel
        isOpen={isAdminPanelOpen}
        onOpenChange={setIsAdminPanelOpen}
        mockPredictions={mockPredictions}
      />
    </div>
  );
};

export default Index;
