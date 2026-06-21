import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { matches, commentary, wormData, runRateData, players } from '@/data/dummyData';
import { ArrowLeft, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function MatchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = matches.find(m => m.id === id) || matches[0];
  
  const playerOfMatch = players.find(p => p.name === match.playerOfMatch);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => navigate('/matches')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Matches
        </Button>

        {/* Match Header */}
        <Card variant={match.status === 'live' ? 'live' : 'default'}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <Badge variant="outline">{match.matchType}</Badge>
                {match.status === 'live' && <Badge variant="live">● LIVE</Badge>}
                {match.status === 'completed' && <Badge variant="outline">COMPLETED</Badge>}
              </div>
              <span className="text-sm text-muted-foreground">{match.date} • {match.time}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Team 1 */}
              <div className="text-center">
                <span className="text-6xl block mb-3">{match.team1.logo}</span>
                <h3 className="font-display text-2xl tracking-wide">{match.team1.name}</h3>
                {match.team1.score && (
                  <div className="mt-3">
                    <span className="font-display text-4xl text-primary">{match.team1.score}</span>
                    <span className="text-muted-foreground ml-2">({match.team1.overs} ov)</span>
                  </div>
                )}
              </div>

              {/* VS */}
              <div className="text-center">
                <span className="font-display text-3xl text-muted-foreground">VS</span>
              </div>

              {/* Team 2 */}
              <div className="text-center">
                <span className="text-6xl block mb-3">{match.team2.logo}</span>
                <h3 className="font-display text-2xl tracking-wide">{match.team2.name}</h3>
                {match.team2.score && (
                  <div className="mt-3">
                    <span className="font-display text-4xl text-primary">{match.team2.score}</span>
                    <span className="text-muted-foreground ml-2">({match.team2.overs} ov)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-muted-foreground">📍 {match.ground}</p>
              {match.result && (
                <p className="text-center text-xl font-medium text-primary mt-2">{match.result}</p>
              )}
              {match.toss && (
                <p className="text-center text-sm text-muted-foreground mt-2">{match.toss}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Match Details Tabs */}
        <Tabs defaultValue="scorecard" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-secondary">
            <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
            <TabsTrigger value="graphs">Graphs</TabsTrigger>
            <TabsTrigger value="commentary">Commentary</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
          </TabsList>

          <TabsContent value="scorecard" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Batting */}
              <Card>
                <CardHeader>
                  <CardTitle>{match.team1.name} - BATTING</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {players.slice(0, 4).map((player, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{player.avatar}</span>
                          <div>
                            <p className="font-medium text-sm">{player.name}</p>
                            <p className="text-xs text-muted-foreground">{i === 0 ? 'Not Out' : 'c Khan b Patel'}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-xl">{Math.floor(Math.random() * 80 + 10)}</p>
                          <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 40 + 15)} balls</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bowling */}
              <Card>
                <CardHeader>
                  <CardTitle>{match.team2.name} - BOWLING</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {players.slice(0, 4).map((player, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{player.avatar}</span>
                          <p className="font-medium text-sm">{player.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-lg">{Math.floor(Math.random() * 3)}/{Math.floor(Math.random() * 35 + 20)}</p>
                          <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 4)} overs</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="graphs" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Worm Graph */}
              <Card>
                <CardHeader>
                  <CardTitle>WORM GRAPH</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={wormData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="over" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip 
                          contentStyle={{ 
                            background: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="teamA" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name={match.team1.name}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="teamB" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth={2}
                          name={match.team2.name}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Run Rate Graph */}
              <Card>
                <CardHeader>
                  <CardTitle>RUN RATE</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={runRateData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="over" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip 
                          contentStyle={{ 
                            background: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="teamA" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name={match.team1.name}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="teamB" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth={2}
                          name={match.team2.name}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Wagon Wheel Placeholder */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>WAGON WHEEL</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
                    <div className="text-center">
                      <span className="text-6xl mb-4 block">🎯</span>
                      <p className="text-muted-foreground">Wagon wheel visualization</p>
                      <p className="text-sm text-muted-foreground mt-2">Shows shot direction data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="commentary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>BALL BY BALL COMMENTARY</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {commentary.map((ball, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-lg ${
                        ball.type === 'wicket' ? 'bg-loss/10 border border-loss/30' :
                        ball.type === 'six' ? 'bg-accent/10 border border-accent/30' :
                        ball.type === 'boundary' ? 'bg-primary/10 border border-primary/30' :
                        'bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-center min-w-[60px]">
                          <span className="font-display text-lg">{ball.over}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{ball.text}</p>
                        </div>
                        <Badge 
                          variant={
                            ball.type === 'wicket' ? 'destructive' :
                            ball.type === 'six' ? 'gold' :
                            ball.type === 'boundary' ? 'default' :
                            'secondary'
                          }
                        >
                          {ball.runs === 0 ? '•' : ball.runs}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Match Info */}
              <Card>
                <CardHeader>
                  <CardTitle>MATCH INFO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Match Type</span>
                    <span className="font-medium">{match.matchType}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Venue</span>
                    <span className="font-medium">{match.ground}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{match.date}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{match.time}</span>
                  </div>
                  {match.toss && (
                    <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                      <span className="text-muted-foreground">Toss</span>
                      <span className="font-medium">{match.toss}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Player of the Match */}
              {playerOfMatch && (
                <Card variant="gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-accent" />
                      PLAYER OF THE MATCH
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <span className="text-6xl block mb-4">{playerOfMatch.avatar}</span>
                      <h3 className="font-display text-2xl tracking-wide">{playerOfMatch.name}</h3>
                      <Badge variant="gold" className="mt-2">{playerOfMatch.role}</Badge>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="p-3 rounded-lg bg-secondary/50">
                          <p className="font-display text-2xl text-primary">{playerOfMatch.runs}</p>
                          <p className="text-xs text-muted-foreground">Runs</p>
                        </div>
                        <div className="p-3 rounded-lg bg-secondary/50">
                          <p className="font-display text-2xl text-primary">{playerOfMatch.wickets}</p>
                          <p className="text-xs text-muted-foreground">Wickets</p>
                        </div>
                        <div className="p-3 rounded-lg bg-secondary/50">
                          <p className="font-display text-2xl text-primary">{playerOfMatch.strikeRate.toFixed(0)}</p>
                          <p className="text-xs text-muted-foreground">SR</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
