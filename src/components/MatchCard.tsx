import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Match } from '@/data/dummyData';
import { useNavigate } from 'react-router-dom';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const navigate = useNavigate();
  
  const getStatusBadge = () => {
    switch (match.status) {
      case 'live':
        return <Badge variant="live">● LIVE</Badge>;
      case 'upcoming':
        return <Badge variant="secondary">UPCOMING</Badge>;
      case 'completed':
        return <Badge variant="outline">COMPLETED</Badge>;
    }
  };

  return (
    <Card
      variant={match.status === 'live' ? 'live' : 'default'}
      className="cursor-pointer hover:scale-[1.02] transition-transform"
      onClick={() => navigate(`/matches/${match.id}`)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{match.matchType}</Badge>
            {getStatusBadge()}
          </div>
          <span className="text-xs text-muted-foreground">{match.date}</span>
        </div>

        <div className="space-y-3">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.team1.logo}</span>
              <span className="font-medium">{match.team1.name}</span>
            </div>
            {match.team1.score && (
              <div className="text-right">
                <span className="font-display text-xl">{match.team1.score}</span>
                <span className="text-xs text-muted-foreground ml-2">({match.team1.overs})</span>
              </div>
            )}
          </div>

          <div className="text-center text-muted-foreground text-sm">vs</div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.team2.logo}</span>
              <span className="font-medium">{match.team2.name}</span>
            </div>
            {match.team2.score && (
              <div className="text-right">
                <span className="font-display text-xl">{match.team2.score}</span>
                <span className="text-xs text-muted-foreground ml-2">({match.team2.overs})</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>📍 {match.ground}</span>
            <span>{match.time}</span>
          </div>
          {match.result && (
            <p className="mt-2 text-sm text-primary font-medium">{match.result}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
