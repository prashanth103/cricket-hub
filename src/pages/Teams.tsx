import { Layout } from '@/components/Layout';
import { TeamCard } from '@/components/TeamCard';
import { teams } from '@/data/dummyData';

export default function Teams() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-4xl tracking-wide mb-2">TEAMS</h1>
          <p className="text-muted-foreground">Browse and manage cricket teams</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
