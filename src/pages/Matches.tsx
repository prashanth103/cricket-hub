import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MatchCard } from '@/components/MatchCard';
import { matches } from '@/data/dummyData';

export default function Matches() {
  const liveMatches = matches.filter(m => m.status === 'live');
  const upcomingMatches = matches.filter(m => m.status === 'upcoming');
  const completedMatches = matches.filter(m => m.status === 'completed');

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-4xl tracking-wide mb-2">MATCHES</h1>
            <p className="text-muted-foreground">Track live, upcoming, and completed matches</p>
          </div>
          {liveMatches.length > 0 && (
            <Badge variant="live" className="text-base px-4 py-2">
              ● {liveMatches.length} LIVE NOW
            </Badge>
          )}
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3 bg-secondary">
            <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Live ({liveMatches.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Upcoming ({upcomingMatches.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Completed ({completedMatches.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="mt-6">
            {liveMatches.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {liveMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <Card variant="glass" className="p-12 text-center">
                <span className="text-6xl mb-4 block">📺</span>
                <h3 className="font-display text-2xl mb-2">NO LIVE MATCHES</h3>
                <p className="text-muted-foreground">Check back later for live cricket action!</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {completedMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
