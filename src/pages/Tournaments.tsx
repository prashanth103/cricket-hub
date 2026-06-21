import { Layout } from '@/components/Layout';
import { TournamentCard } from '@/components/TournamentCard';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tournaments } from '@/data/dummyData';

export default function Tournaments() {
  const ongoingTournaments = tournaments.filter(t => t.status === 'ongoing');
  const upcomingTournaments = tournaments.filter(t => t.status === 'upcoming');
  const completedTournaments = tournaments.filter(t => t.status === 'completed');

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-4xl tracking-wide mb-2">TOURNAMENTS</h1>
            <p className="text-muted-foreground">Compete in exciting cricket tournaments</p>
          </div>
          {ongoingTournaments.length > 0 && (
            <Badge variant="live" className="text-base px-4 py-2">
              🏆 {ongoingTournaments.length} ONGOING
            </Badge>
          )}
        </div>

        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3 bg-secondary">
            <TabsTrigger value="ongoing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Ongoing ({ongoingTournaments.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Upcoming ({upcomingTournaments.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Completed ({completedTournaments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {ongoingTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {completedTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
