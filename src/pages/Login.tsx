import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronRight, Phone, Shield } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Any OTP works - dummy auth
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 gradient-hero">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">🏏</span>
            <span className="font-display text-4xl tracking-wide text-gradient">CRICKTRIBE</span>
          </div>
          <p className="text-muted-foreground">Join India's largest cricket community</p>
        </div>

        <Card variant="glass" className="backdrop-blur-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-display text-2xl tracking-wide">
              {step === 'phone' ? 'LOGIN / SIGN UP' : 'VERIFY OTP'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 'phone' ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 h-12 bg-secondary border-border"
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Send OTP
                  <ChevronRight className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Your data is secure with us</span>
                </div>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-muted-foreground">Enter OTP</label>
                    <button
                      type="button"
                      onClick={() => setStep('phone')}
                      className="text-sm text-primary hover:underline"
                    >
                      Change Number
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    OTP sent to {phone}
                  </p>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="h-12 bg-secondary border-border text-center text-2xl tracking-[0.5em] font-mono"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Verify & Continue
                  <ChevronRight className="h-5 w-5" />
                </Button>

                <div className="text-center">
                  <button type="button" className="text-sm text-primary hover:underline">
                    Resend OTP
                  </button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Demo hint */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          💡 Demo: Enter any phone number and any OTP to continue
        </p>

        <div className="text-center mt-4">
          <Button variant="ghost" onClick={() => navigate('/')}>
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
