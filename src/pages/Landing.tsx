import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { matches, players, tournaments } from '@/data/dummyData';
import { Trophy, Users, Swords, MapPin, ChevronRight, Play } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const liveMatches = matches.filter(m => m.status === 'live');
  
  const stats = [
    { icon: '🏏', value: '2,450+', label: 'Active Players' },
    { icon: '⚔️', value: '156', label: 'Matches Today' },
    { icon: '🏆', value: '48', label: 'Tournaments' },
    { icon: '🏟️', value: '320+', label: 'Grounds' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🏏</span>
            <span className="font-display text-3xl tracking-wide text-gradient">CRICKTRIBE</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => navigate('/matches')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Matches
            </button>
            <button 
              onClick={() => navigate('/teams')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Teams
            </button>
            <button 
              onClick={() => navigate('/tournaments')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tournaments
            </button>
          </div>
          <Button variant="hero" onClick={() => navigate('/login')}>
            Login
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-6">
              🏆 India's #1 Cricket Community Platform
            </Badge>
            <h1 className="font-display text-5xl lg:text-7xl tracking-wide mb-6 leading-tight">
              YOUR CRICKET.
              <br />
              <span className="text-gradient">YOUR TRIBE.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Track your stats, join tournaments, find nearby players and grounds. 
              The ultimate platform for cricket enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={() => navigate('/login')}>
                Get Started
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="xl" onClick={() => navigate('/matches')}>
                <Play className="h-5 w-5" />
                Watch Live
              </Button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="glass rounded-2xl p-6 space-y-4 float">
              {stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="font-display text-2xl text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-4xl mb-3 block">{stat.icon}</span>
                <p className="font-display text-4xl text-gradient mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Matches */}
      {liveMatches.length > 0 && (
        <section className="py-16 container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Badge variant="live">● LIVE</Badge>
              <h2 className="font-display text-3xl tracking-wide">LIVE MATCHES</h2>
            </div>
            <Button variant="outline" onClick={() => navigate('/matches')}>
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <Card key={match.id} variant="live" className="cursor-pointer hover:scale-[1.02] transition-transform">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline">{match.matchType}</Badge>
                    <span className="text-xs text-muted-foreground">{match.ground}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{match.team1.logo}</span>
                        <span className="font-medium text-lg">{match.team1.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-display text-2xl">{match.team1.score}</span>
                        <span className="text-sm text-muted-foreground ml-2">({match.team1.overs})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{match.team2.logo}</span>
                        <span className="font-medium text-lg">{match.team2.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-display text-2xl">{match.team2.score}</span>
                        <span className="text-sm text-muted-foreground ml-2">({match.team2.overs})</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{match.toss}</span>
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/matches/${match.id}`)}>
                      Details <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl tracking-wide mb-4">WHY CRICKTRIBE?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to elevate your cricket journey in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Trophy className="h-8 w-8" />, title: 'Track Stats', desc: 'Detailed batting, bowling & fielding statistics' },
              { icon: <Swords className="h-8 w-8" />, title: 'Live Scoring', desc: 'Ball-by-ball updates with graphs & analytics' },
              { icon: <Users className="h-8 w-8" />, title: 'Build Teams', desc: 'Create teams, manage squads & play matches' },
              { icon: <MapPin className="h-8 w-8" />, title: 'Find Players', desc: 'Connect with nearby players and grounds' },
            ].map((feature, i) => (
              <Card key={i} variant="glass" className="p-6 text-center hover:shadow-glow transition-shadow">
                <div className="w-16 h-16 rounded-xl gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl tracking-wide mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Players */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl tracking-wide">TOP PLAYERS</h2>
          <Button variant="outline" onClick={() => navigate('/community')}>
            Explore All
          </Button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {players.map((player, i) => (
            <Card key={player.id} className="p-4 text-center hover:shadow-glow transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">{player.avatar}</div>
              <p className="font-medium">{player.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{player.role}</p>
              <div className="flex justify-center gap-4 text-sm">
                <div>
                  <p className="font-display text-lg text-primary">{player.runs}</p>
                  <p className="text-xs text-muted-foreground">Runs</p>
                </div>
                <div>
                  <p className="font-display text-lg text-primary">{player.wickets}</p>
                  <p className="text-xs text-muted-foreground">Wkts</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-5xl tracking-wide mb-6 text-primary-foreground">
            READY TO JOIN THE TRIBE?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Create your profile, track your stats, and become part of India's largest cricket community.
          </p>
          <Button variant="gold" size="xl" onClick={() => navigate('/login')}>
            Join CrickTribe Now
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏏</span>
              <span className="font-display text-2xl tracking-wide text-gradient">CRICKTRIBE</span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <button className="hover:text-foreground transition-colors">About</button>
              <button className="hover:text-foreground transition-colors">Terms</button>
              <button className="hover:text-foreground transition-colors">Privacy</button>
              <button className="hover:text-foreground transition-colors">Contact</button>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 CrickTribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
