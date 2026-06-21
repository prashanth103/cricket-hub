import { Card, CardContent } from '@/components/ui/card';
import { Team } from '@/data/dummyData';
import { useNavigate } from 'react-router-dom';
import { Trophy, Users } from 'lucide-react';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer hover:scale-[1.02] transition-transform hover:shadow-glow"
      onClick={() => navigate(`/teams/${team.id}`)}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-4xl">
            {team.logo}
          </div>
          <div>
            <h3 className="font-display text-xl tracking-wide">{team.name}</h3>
            <p className="text-sm text-muted-foreground">Captain: {team.captain}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 rounded-lg bg-secondary/50">
            <p className="text-win font-display text-xl">{team.wins}</p>
            <p className="text-xs text-muted-foreground">Wins</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-secondary/50">
            <p className="text-loss font-display text-xl">{team.losses}</p>
            <p className="text-xs text-muted-foreground">Losses</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-secondary/50">
            <p className="text-draw font-display text-xl">{team.draws}</p>
            <p className="text-xs text-muted-foreground">Draws</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{team.players.length} Players</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Trophy className="h-4 w-4" />
            <span>{team.trophies} Trophies</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{team.homeGround}</span>
            <span className={`text-sm font-medium ${parseFloat(team.nrr) > 0 ? 'text-win' : 'text-loss'}`}>
              NRR: {team.nrr}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
