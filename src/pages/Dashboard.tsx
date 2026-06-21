import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/components/StatCard';
import { MatchCard } from '@/components/MatchCard';
import { matches, feedPosts, userStats, tournaments } from '@/data/dummyData';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Heart, MessageCircle } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const upcomingMatches = matches.filter(m => m.status === 'upcoming' || m.status === 'live').slice(0, 3);
  const ongoingTournaments = tournaments.filter(t => t.status === 'ongoing');

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl tracking-wide mb-2">WELCOME BACK, VIKRAM!</h1>
            <p className="text-muted-foreground">Your cricket journey continues. Here's your latest updates.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate('/profile')}>
              View Profile
            </Button>
            <Button variant="hero" onClick={() => navigate('/matches')}>
              Find Match
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon="🏏" label="Total Runs" value={userStats.totalRuns.toLocaleString()} trend="+245" />
          <StatCard icon="🎯" label="Wickets" value={userStats.totalWickets} trend="+3" />
          <StatCard icon="⚔️" label="Matches" value={userStats.matchesPlayed} />
          <StatCard icon="🏆" label="Ranking" value={`#${userStats.ranking}`} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Matches & Tournaments */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Matches */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>UPCOMING MATCHES</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => navigate('/matches')}>
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </CardContent>
            </Card>

            {/* Ongoing Tournaments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>ONGOING TOURNAMENTS</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => navigate('/tournaments')}>
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {ongoingTournaments.map((tournament) => (
                  <div
                    key={tournament.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
                    onClick={() => navigate(`/tournaments/${tournament.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{tournament.logo}</span>
                      <div>
                        <h3 className="font-medium">{tournament.name}</h3>
                        <p className="text-sm text-muted-foreground">{tournament.teams} teams • {tournament.format}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="live">ONGOING</Badge>
                      <p className="text-sm text-accent mt-1">{tournament.prize}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Feed & Quick Stats */}
          <div className="space-y-6">
            {/* Performance Card */}
            <Card variant="gradient">
              <CardContent className="p-6">
                <h3 className="font-display text-xl tracking-wide mb-4">YOUR PERFORMANCE</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Win Rate</span>
                    <span className="font-display text-2xl text-win">{userStats.winRate}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                      style={{ width: `${userStats.winRate}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-3 rounded-lg bg-secondary/50">
                      <p className="font-display text-xl text-accent">{userStats.centuries}</p>
                      <p className="text-xs text-muted-foreground">Centuries</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary/50">
                      <p className="font-display text-xl text-accent">{userStats.fifties}</p>
                      <p className="text-xs text-muted-foreground">Fifties</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feed */}
            <Card>
              <CardHeader>
                <CardTitle>COMMUNITY FEED</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {feedPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="p-4 rounded-lg bg-secondary/50 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{post.authorAvatar}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                      </div>
                      {post.type === 'achievement' && <Badge variant="gold">🏆</Badge>}
                      {post.type === 'match' && <Badge variant="live">LIVE</Badge>}
                    </div>
                    <p className="text-sm">{post.content}</p>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </button>
                    </div>
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
