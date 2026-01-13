import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AdminPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  mockPredictions: any[];
}

const AdminPanel = ({ isOpen, onOpenChange, mockPredictions }: AdminPanelProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon name="Shield" className="text-accent" size={28} />
            Панель администратора
          </DialogTitle>
          <DialogDescription>
            Управление прогнозами, пользователями и контентом платформы
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="predictions" className="py-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="predictions">Прогнозы</TabsTrigger>
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>
          <TabsContent value="predictions" className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Управление прогнозами</h4>
              <Button className="gradient-primary">
                <Icon name="Plus" className="mr-2" size={18} />
                Добавить прогноз
              </Button>
            </div>
            <div className="space-y-2">
              {mockPredictions.slice(0, 3).map((pred) => (
                <Card key={pred.id} className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{pred.match}</div>
                    <div className="text-sm text-muted-foreground">{pred.prediction}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Icon name="Edit" size={16} />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            <h4 className="font-semibold">Статистика пользователей</h4>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="text-3xl font-bold text-primary mb-1">10,234</div>
                <div className="text-sm text-muted-foreground">Всего пользователей</div>
              </Card>
              <Card className="p-4">
                <div className="text-3xl font-bold text-accent mb-1">1,456</div>
                <div className="text-sm text-muted-foreground">Premium подписки</div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4">
            <h4 className="font-semibold">Настройки платформы</h4>
            <Card className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Push-уведомления</div>
                  <div className="text-sm text-muted-foreground">Отправка уведомлений пользователям</div>
                </div>
                <Button variant="outline">Настроить</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Модерация прогнозов</div>
                  <div className="text-sm text-muted-foreground">Автоматическая проверка контента</div>
                </div>
                <Button variant="outline">Настроить</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;
