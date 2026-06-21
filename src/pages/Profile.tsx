import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { players, matches, userStats } from '@/data/dummyData';
import { ArrowLeft, MapPin, Trophy, Target, Edit } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const player = players.find(p => p.id === id) || players[0];

  const battingData = [
    { name: '1s', value: 45, color: 'hsl(var(--muted))' },
    { name: '2s', value: 20, color: 'hsl(var(--secondary))' },
    { name: '4s', value: 25, color: 'hsl(var(--primary))' },
    { name: '6s', value: 10, color: 'hsl(var(--accent))' },
  ];

  const performanceData = [
    { match: 'M1', runs: 78, wickets: 1 },
    { match: 'M2', runs: 45, wickets: 2 },
    { match: 'M3', runs: 102, wickets: 0 },
    { match: 'M4', runs: 23, wickets: 3 },
    { match: 'M5', runs: 89, wickets: 1 },
  ];

  const playerMatches = matches.slice(0, 3);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        {id && (
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
        )}

        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center text-6xl border-4 border-primary">
                {player.avatar}
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="font-display text-4xl tracking-wide">{player.name}</h1>
                  <Badge variant="gold">#{player.ranking}</Badge>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                  <Badge variant="outline">
                    <MapPin className="h-3 w-3 mr-1" />
                    {player.location}
                  </Badge>
                  <Badge variant={player.role === 'Batsman' ? 'gold' : 'default'}>
                    {player.role}
                  </Badge>
                  <Badge variant="secondary">Age: {player.age}</Badge>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-muted-foreground">
                  <span>{player.battingStyle}</span>
                  <span>•</span>
                  <span>{player.bowlingStyle}</span>
                </div>
              </div>
              {!id && (
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" /> Edit Profile
                </Button>
              )}
            </div>

            {/* Recent Form */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Recent Form</p>
              <div className="flex items-center gap-2">
                {player.recentForm.map((result, i) => (
                  <span
                    key={i}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      result === 'W' ? 'bg-win/20 text-win' :
                      result === 'L' ? 'bg-loss/20 text-loss' :
                      'bg-draw/20 text-draw'
                    }`}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card className="p-4 text-center">
            <p className="text-muted-foreground text-sm">Matches</p>
            <p className="font-display text-3xl text-primary">{player.matches}</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-muted-foreground text-sm">Runs</p>
            <p className="font-display text-3xl text-primary">{player.runs.toLocaleString()}</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-muted-foreground text-sm">Wickets</p>
            <p className="font-display text-3xl text-primary">{player.wickets}</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-muted-foreground text-sm">Average</p>
            <p className="font-display text-3xl text-accent">{player.average}</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-muted-foreground text-sm">Strike Rate</p>
            <p className="font-display text-3xl text-accent">{player.strikeRate}</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-muted-foreground text-sm">High Score</p>
            <p className="font-display text-3xl text-win">{player.highestScore}</p>
          </Card>
        </div>

        {/* Detailed Stats Tabs */}
        <Tabs defaultValue="batting" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-secondary">
            <TabsTrigger value="batting">Batting</TabsTrigger>
            <TabsTrigger value="bowling">Bowling</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
          </TabsList>

          <TabsContent value="batting" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>BATTING STATS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Innings</span>
                    <span className="font-display text-xl">{player.matches - 5}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Not Outs</span>
                    <span className="font-display text-xl">12</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Highest Score</span>
                    <span className="font-display text-xl text-win">{player.highestScore}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Average</span>
                    <span className="font-display text-xl">{player.average}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Strike Rate</span>
                    <span className="font-display text-xl">{player.strikeRate}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-accent/10 border border-accent/30">
                    <span className="text-muted-foreground">Centuries</span>
                    <span className="font-display text-xl text-accent">{player.centuries}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <span className="text-muted-foreground">Fifties</span>
                    <span className="font-display text-xl text-primary">{player.fifties}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SCORING BREAKDOWN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={battingData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {battingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bowling" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>BOWLING STATS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Wickets</span>
                    <span className="font-display text-xl">{player.wickets}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Best Bowling</span>
                    <span className="font-display text-xl text-win">{player.bestBowling}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Economy</span>
                    <span className="font-display text-xl">7.85</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Overs Bowled</span>
                    <span className="font-display text-xl">234.2</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Maidens</span>
                    <span className="font-display text-xl">8</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>RECENT PERFORMANCE</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <XAxis dataKey="match" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip 
                          contentStyle={{ 
                            background: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Bar dataKey="runs" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  ACHIEVEMENTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {player.achievements.map((achievement, i) => (
                    <div 
                      key={i} 
                      className="p-6 rounded-xl gradient-card border border-accent/30 text-center hover:shadow-gold transition-shadow"
                    >
                      <span className="text-4xl mb-3 block">🏆</span>
                      <p className="font-display text-lg tracking-wide">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>RECENT MATCHES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {playerMatches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
                    onClick={() => navigate(`/matches/${match.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{match.team1.logo}</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="text-2xl">{match.team2.logo}</span>
                      <div className="ml-2">
                        <p className="font-medium">{match.team1.name} vs {match.team2.name}</p>
                        <p className="text-sm text-muted-foreground">{match.ground}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={match.status === 'completed' ? 'outline' : 'live'}>
                        {match.status.toUpperCase()}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{match.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
