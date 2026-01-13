import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface PredictionCardProps {
  prediction: {
    id: number;
    sport: string;
    match: string;
    league: string;
    prediction: string;
    odds: number;
    status: string;
    capper: string;
    capperWinRate: number;
    time: string;
    isPremium: boolean;
    analysis: string;
  };
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
}

const PredictionCard = ({ prediction: pred, getStatusColor, getStatusText }: PredictionCardProps) => {
  return (
    <Card className="p-6 bg-card hover:border-primary/50 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{pred.sport}</span>
            <Badge variant="outline" className={getStatusColor(pred.status)}>
              {getStatusText(pred.status)}
            </Badge>
            {pred.isPremium && (
              <Badge className="gradient-accent border-0">
                <Icon name="Crown" size={14} className="mr-1" />
                Premium
              </Badge>
            )}
          </div>
          <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {pred.match}
          </h4>
          <p className="text-sm text-muted-foreground">{pred.league}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-1">Коэффициент</div>
          <div className="text-2xl font-bold text-primary">{pred.odds}</div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Прогноз</span>
          <span className="font-bold text-lg">{pred.prediction}</span>
        </div>
        <p className="text-sm text-muted-foreground">{pred.analysis}</p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="gradient-primary text-white font-bold">
              {pred.capper.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{pred.capper}</div>
            <div className="text-sm text-green-400">Винрейт {pred.capperWinRate}%</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Icon name="Clock" size={14} />
            {pred.time}
          </Badge>
          {pred.isPremium ? (
            <Button className="gradient-accent hover:opacity-90">
              <Icon name="Lock" className="mr-2" size={16} />
              Открыть
            </Button>
          ) : (
            <Button className="gradient-primary hover:opacity-90">
              Подробнее
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PredictionCard;
