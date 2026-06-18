import { useState } from 'react';
import { supabase } from '../lib/supabase';

type AuthProps = {
  onSkip?: () => void;
};

export function Auth({ onSkip }: AuthProps) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      if (!supabase) {
        setMessage('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
        return;
      }

      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          shouldCreateUser: true,
          emailRedirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
        },
      });

      if (error) setMessage(error.message);
      else {
        setStep('code');
        setMessage('Code sent. Check your Gmail inbox or spam folder.');
      }
    } catch {
      setMessage('Could not send the code. Try again.');
    } finally {
      setBusy(false);
    }
  }

  async function verifyCode(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      if (!supabase) {
        setMessage('Supabase is not configured.');
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: code.trim(),
        type: 'email',
      });

      if (error) setMessage(error.message);
      else setMessage('Login complete. Opening the night shift.');
    } catch {
      setMessage('Wrong or expired code.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="auth-screen">
      <div className="auth-card">
        <span className="auth-kicker">Secure access</span>
        <h1>Shesterochka Horror</h1>
        <p>Enter your Gmail, receive a one-time code, then Gemini Help opens inside the game.</p>

        {step === 'email' ? (
          <form onSubmit={sendCode} className="auth-form">
            <input
              type="email"
              placeholder="yourname@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <button type="submit" disabled={busy}>
              {busy ? 'Sending...' : 'Send code'}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className="auth-form">
            <input
              inputMode="numeric"
              placeholder="6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit" disabled={busy}>
              {busy ? 'Checking...' : 'Verify code'}
            </button>
            <button type="button" className="ghost" onClick={() => setStep('email')}>
              Change email
            </button>
          </form>
        )}

        {message && <p className="auth-message">{message}</p>}
        {onSkip && (
          <button type="button" className="ghost auth-skip" onClick={onSkip}>
            Play offline
          </button>
        )}
      </div>
    </section>
  );
}
