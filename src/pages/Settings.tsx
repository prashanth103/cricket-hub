import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Globe, Bell, Shield, LogOut, User, ChevronRight } from 'lucide-react';

export default function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [matchAlerts, setMatchAlerts] = useState(true);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-4xl tracking-wide mb-2">SETTINGS</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              PROFILE SETTINGS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Vikram Sharma" className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+91 9876543210" className="bg-secondary border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="vikram@cricktribe.com" className="bg-secondary border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue="Mumbai, India" className="bg-secondary border-border" />
            </div>
            <Button variant="hero">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              APPEARANCE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Use dark theme for the app</p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              NOTIFICATIONS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive push notifications</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Live Match Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified for live match updates</p>
                </div>
              </div>
              <Switch checked={matchAlerts} onCheckedChange={setMatchAlerts} />
            </div>
          </CardContent>
        </Card>

        {/* Language */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              LANGUAGE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'বাংলা'].map((lang, i) => (
                <button
                  key={lang}
                  className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                    i === 0 ? 'bg-primary/10 border border-primary/30' : 'bg-secondary/50 hover:bg-secondary/70'
                  }`}
                >
                  <span className={i === 0 ? 'text-primary font-medium' : ''}>{lang}</span>
                  {i === 0 && <ChevronRight className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-loss/30">
          <CardContent className="p-6">
            <Button
              variant="outline"
              className="w-full border-loss text-loss hover:bg-loss/10"
              onClick={() => navigate('/')}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center text-sm text-muted-foreground py-4">
          <p>CrickTribe v1.0.0</p>
          <p>Made with ❤️ for cricket lovers</p>
        </div>
      </div>
    </Layout>
  );
}
