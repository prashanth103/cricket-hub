import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayerCard } from '@/components/PlayerCard';
import { players, grounds, feedPosts } from '@/data/dummyData';
import { MapPin, Star, Users, Heart, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Community() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-4xl tracking-wide mb-2">COMMUNITY</h1>
          <p className="text-muted-foreground">Connect with players, find grounds, and stay updated</p>
        </div>

        <Tabs defaultValue="players" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-secondary">
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="grounds">Grounds</TabsTrigger>
            <TabsTrigger value="feed">Feed</TabsTrigger>
          </TabsList>

          <TabsContent value="players" className="mt-6">
            <div className="mb-6">
              <h2 className="font-display text-2xl tracking-wide mb-2">NEARBY PLAYERS</h2>
              <p className="text-muted-foreground text-sm">Players in your area looking for matches</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grounds" className="mt-6">
            <div className="mb-6">
              <h2 className="font-display text-2xl tracking-wide mb-2">NEARBY GROUNDS</h2>
              <p className="text-muted-foreground text-sm">Cricket grounds available for booking</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {grounds.map((ground) => (
                <Card key={ground.id} className="overflow-hidden hover:shadow-glow transition-shadow cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl">🏟️</span>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl tracking-wide">{ground.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{ground.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="h-4 w-4 fill-accent" />
                        <span className="font-medium">{ground.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Capacity: {ground.capacity.toLocaleString()}</span>
                      </div>
                      <Badge variant="outline">Available</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feed" className="mt-6">
            <div className="max-w-2xl mx-auto space-y-6">
              {feedPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{post.authorAvatar}</span>
                      <div className="flex-1">
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                      </div>
                      {post.type === 'achievement' && <Badge variant="gold">🏆 Achievement</Badge>}
                      {post.type === 'match' && <Badge variant="live">⚔️ Live Match</Badge>}
                    </div>
                    <p className="text-foreground mb-4">{post.content}</p>
                    {post.image && (
                      <div className="h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                        <span className="text-5xl">🏏</span>
                      </div>
                    )}
                    <div className="flex items-center gap-6 pt-4 border-t border-border">
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
