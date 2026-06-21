import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/data/dummyData';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const navigate = useNavigate();

  const getRoleBadge = () => {
    switch (player.role) {
      case 'Batsman':
        return <Badge variant="gold">🏏 {player.role}</Badge>;
      case 'Bowler':
        return <Badge variant="default">🎯 {player.role}</Badge>;
      case 'All-rounder':
        return <Badge variant="secondary">⚡ {player.role}</Badge>;
      case 'Wicket-keeper':
        return <Badge variant="outline">🧤 {player.role}</Badge>;
    }
  };

  return (
    <Card
      className="cursor-pointer hover:scale-[1.02] transition-transform hover:shadow-glow"
      onClick={() => navigate(`/profile/${player.id}`)}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-3xl">
            {player.avatar}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg tracking-wide">{player.name}</h3>
            <p className="text-xs text-muted-foreground">{player.location}</p>
          </div>
          <div className="text-right">
            <p className="text-accent font-display text-xl">#{player.ranking}</p>
            <p className="text-xs text-muted-foreground">Rank</p>
          </div>
        </div>

        {getRoleBadge()}

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="text-center p-2 rounded-lg bg-secondary/50">
            <p className="font-display text-lg text-primary">{player.runs}</p>
            <p className="text-xs text-muted-foreground">Runs</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-secondary/50">
            <p className="font-display text-lg text-primary">{player.wickets}</p>
            <p className="text-xs text-muted-foreground">Wickets</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-secondary/50">
            <p className="font-display text-lg text-primary">{player.matches}</p>
            <p className="text-xs text-muted-foreground">Matches</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-3 justify-center">
          {player.recentForm.map((result, i) => (
            <span
              key={i}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                result === 'W' ? 'bg-win/20 text-win' :
                result === 'L' ? 'bg-loss/20 text-loss' :
                'bg-draw/20 text-draw'
              }`}
            >
              {result}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
