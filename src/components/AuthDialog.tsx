import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface AuthDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  authMode: 'login' | 'register';
  onAuthModeChange: (mode: 'login' | 'register') => void;
  onLogin: () => void;
}

const AuthDialog = ({ isOpen, onOpenChange, authMode, onAuthModeChange, onLogin }: AuthDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {authMode === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
          </DialogTitle>
          <DialogDescription>
            {authMode === 'login' 
              ? 'Введите свои данные для входа' 
              : 'Создайте аккаунт для доступа к прогнозам'}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {authMode === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" placeholder="Ваше имя" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button 
            className="w-full gradient-primary hover:opacity-90" 
            size="lg"
            onClick={onLogin}
          >
            {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => onAuthModeChange(authMode === 'login' ? 'register' : 'login')}
          >
            {authMode === 'login' ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
