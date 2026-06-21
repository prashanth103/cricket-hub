import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tournaments, pointsTable, leaderboard, matches } from '@/data/dummyData';
import { ArrowLeft, Trophy, Calendar, MapPin, Users } from 'lucide-react';

export default function TournamentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tournament = tournaments.find(t => t.id === id) || tournaments[0];

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
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => navigate('/tournaments')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Tournaments
        </Button>

        {/* Tournament Header */}
        <Card variant={tournament.status === 'ongoing' ? 'gradient' : 'default'}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="text-7xl">{tournament.logo}</span>
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="font-display text-4xl tracking-wide">{tournament.name}</h1>
                  {getStatusBadge()}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{tournament.startDate} - {tournament.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{tournament.teams} Teams</span>
                  </div>
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <p className="text-muted-foreground text-sm mb-1">Prize Pool</p>
                <p className="font-display text-3xl text-accent">{tournament.prize}</p>
                <Badge variant="outline" className="mt-2">{tournament.format}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tournament Details Tabs */}
        <Tabs defaultValue="points" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-secondary">
            <TabsTrigger value="points">Points Table</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="bracket">Bracket</TabsTrigger>
          </TabsList>

          <TabsContent value="points" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>POINTS TABLE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground text-sm">
                        <th className="text-left py-3 px-4">#</th>
                        <th className="text-left py-3 px-4">Team</th>
                        <th className="text-center py-3 px-4">P</th>
                        <th className="text-center py-3 px-4">W</th>
                        <th className="text-center py-3 px-4">L</th>
                        <th className="text-center py-3 px-4">NRR</th>
                        <th className="text-center py-3 px-4">PTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pointsTable.map((row, i) => (
                        <tr 
                          key={i} 
                          className={`border-b border-border/50 hover:bg-secondary/50 transition-colors ${
                            i < 4 ? 'bg-primary/5' : ''
                          }`}
                        >
                          <td className="py-4 px-4">
                            <span className={`font-display text-lg ${i < 4 ? 'text-primary' : 'text-muted-foreground'}`}>
                              {row.position}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-medium">{row.team}</td>
                          <td className="text-center py-4 px-4">{row.played}</td>
                          <td className="text-center py-4 px-4 text-win">{row.won}</td>
                          <td className="text-center py-4 px-4 text-loss">{row.lost}</td>
                          <td className={`text-center py-4 px-4 ${parseFloat(row.nrr) > 0 ? 'text-win' : 'text-loss'}`}>
                            {row.nrr}
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className="font-display text-xl text-primary">{row.points}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Top 4 teams qualify for playoffs
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fixtures" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>FIXTURES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
                    onClick={() => navigate(`/matches/${match.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{match.team1.logo}</span>
                        <span className="font-medium">{match.team1.name}</span>
                      </div>
                      <span className="text-muted-foreground">vs</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{match.team2.logo}</span>
                        <span className="font-medium">{match.team2.name}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={match.status === 'live' ? 'live' : match.status === 'completed' ? 'outline' : 'secondary'}>
                        {match.status.toUpperCase()}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{match.date} • {match.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Orange Cap */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🧢 ORANGE CAP
                    <Badge variant="gold">Most Runs</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {leaderboard.orangeCap.map((player, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        i === 0 ? 'bg-accent/10 border border-accent/30' : 'bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl w-8">{player.rank}</span>
                        <div>
                          <p className="font-medium">{player.player}</p>
                          <p className="text-sm text-muted-foreground">{player.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-display text-2xl ${i === 0 ? 'text-accent' : 'text-primary'}`}>
                          {player.runs}
                        </p>
                        <p className="text-xs text-muted-foreground">{player.matches} matches</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Purple Cap */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🧢 PURPLE CAP
                    <Badge variant="default">Most Wickets</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {leaderboard.purpleCap.map((player, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        i === 0 ? 'bg-primary/10 border border-primary/30' : 'bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl w-8">{player.rank}</span>
                        <div>
                          <p className="font-medium">{player.player}</p>
                          <p className="text-sm text-muted-foreground">{player.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-display text-2xl ${i === 0 ? 'text-primary' : 'text-foreground'}`}>
                          {player.wickets}
                        </p>
                        <p className="text-xs text-muted-foreground">{player.matches} matches</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bracket" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>TOURNAMENT BRACKET</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8">
                  {/* Semi Finals */}
                  <div className="space-y-8">
                    <div className="p-4 rounded-lg border border-border bg-secondary/30 text-center w-48">
                      <p className="text-xs text-muted-foreground mb-2">Semi Final 1</p>
                      <div className="space-y-2">
                        <p className="font-medium">🔴 Mumbai Strikers</p>
                        <p className="text-muted-foreground">vs</p>
                        <p className="font-medium">🟣 Kolkata Warriors</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-secondary/30 text-center w-48">
                      <p className="text-xs text-muted-foreground mb-2">Semi Final 2</p>
                      <div className="space-y-2">
                        <p className="font-medium">🟡 Chennai Kings</p>
                        <p className="text-muted-foreground">vs</p>
                        <p className="font-medium">🟠 Bangalore Bulls</p>
                      </div>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="hidden md:block w-12 h-32 border-t-2 border-b-2 border-r-2 border-border rounded-r-lg" />

                  {/* Final */}
                  <div className="p-6 rounded-xl gradient-card border border-accent/30 text-center w-56">
                    <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="text-sm text-accent font-medium mb-3">FINAL</p>
                    <div className="space-y-2">
                      <p className="font-medium">SF1 Winner</p>
                      <p className="text-muted-foreground">vs</p>
                      <p className="font-medium">SF2 Winner</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Dec 30, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
