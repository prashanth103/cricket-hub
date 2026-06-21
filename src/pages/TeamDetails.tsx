import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { teams, players, matches } from '@/data/dummyData';
import { ArrowLeft, Trophy, Users, MapPin } from 'lucide-react';

export default function TeamDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const team = teams.find(t => t.id === id) || teams[0];
  
  const teamMatches = matches.filter(
    m => m.team1.name === team.name || m.team2.name === team.name
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => navigate('/teams')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Teams
        </Button>

        {/* Team Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-6xl">
                {team.logo}
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="font-display text-4xl tracking-wide">{team.name}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                  <Badge variant="outline">
                    <Users className="h-3 w-3 mr-1" />
                    Captain: {team.captain}
                  </Badge>
                  <Badge variant="outline">
                    <MapPin className="h-3 w-3 mr-1" />
                    {team.homeGround}
                  </Badge>
                  <Badge variant="gold">
                    <Trophy className="h-3 w-3 mr-1" />
                    {team.trophies} Trophies
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-display text-2xl text-win">{team.wins}</p>
                  <p className="text-xs text-muted-foreground">Wins</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-display text-2xl text-loss">{team.losses}</p>
                  <p className="text-xs text-muted-foreground">Losses</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-display text-2xl text-draw">{team.draws}</p>
                  <p className="text-xs text-muted-foreground">Draws</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className={`font-display text-2xl ${parseFloat(team.nrr) > 0 ? 'text-win' : 'text-loss'}`}>
                    {team.nrr}
                  </p>
                  <p className="text-xs text-muted-foreground">NRR</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Squad */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>SQUAD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
                    onClick={() => navigate(`/profile/${player.id}`)}
                  >
                    <span className="text-3xl">{player.avatar}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{player.name}</p>
                        {player.id === team.captainId && (
                          <Badge variant="gold" className="text-xs">C</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{player.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-display text-primary">{player.matches}</p>
                      <p className="text-xs text-muted-foreground">matches</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Stats */}
          <div className="space-y-6">
            <Card variant="gradient">
              <CardHeader>
                <CardTitle>TEAM STATS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                  <span className="text-muted-foreground">Total Matches</span>
                  <span className="font-display text-xl">{team.wins + team.losses + team.draws}</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="font-display text-xl text-win">
                    {((team.wins / (team.wins + team.losses + team.draws)) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                  <span className="text-muted-foreground">Players</span>
                  <span className="font-display text-xl">{players.length}</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                  <span className="text-muted-foreground">Home Ground</span>
                  <span className="text-sm font-medium">{team.homeGround}</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card>
              <CardHeader>
                <CardTitle>RECENT MATCHES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {teamMatches.slice(0, 3).map((match) => (
                  <div
                    key={match.id}
                    className="p-3 rounded-lg bg-secondary/50 cursor-pointer hover:bg-secondary/70 transition-colors"
                    onClick={() => navigate(`/matches/${match.id}`)}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span>{match.team1.name} vs {match.team2.name}</span>
                      <Badge variant={match.status === 'live' ? 'live' : 'outline'}>
                        {match.status.toUpperCase()}
                      </Badge>
                    </div>
                    {match.result && (
                      <p className="text-xs text-primary mt-1">{match.result}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
