import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tournament } from '@/data/dummyData';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin } from 'lucide-react';

interface TournamentCardProps {
  tournament: Tournament;
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  const navigate = useNavigate();

  const getStatusBadge = () => {
    switch (tournament.status) {
      case 'ongoing':
        return <Badge variant="live">ONGOING</Badge>;
      case 'upcoming':
        return <Badge variant="secondary">UPCOMING</Badge>;
      case 'completed':
        return <Badge variant="outline">COMPLETED</Badge>;
    }
  };

  return (
    <Card
      variant={tournament.status === 'ongoing' ? 'gradient' : 'default'}
      className="cursor-pointer hover:scale-[1.02] transition-transform"
      onClick={() => navigate(`/tournaments/${tournament.id}`)}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{tournament.logo}</span>
            <div>
              <h3 className="font-display text-xl tracking-wide">{tournament.name}</h3>
              <Badge variant="outline" className="mt-1">{tournament.format}</Badge>
            </div>
          </div>
          {getStatusBadge()}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{tournament.teams} Teams</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{tournament.matches} Matches</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{tournament.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">{tournament.startDate} - {tournament.endDate}</span>
            <span className="text-accent font-semibold">{tournament.prize}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
