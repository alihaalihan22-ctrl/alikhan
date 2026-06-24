import { useState } from 'react';
import { supabase } from '../lib/supabase';

type AuthProps = {
  onClose?: () => void;
  onSuccess?: () => void;
};

export function Auth({ onClose, onSuccess }: AuthProps) {
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
        setMessage('База Supabase не настроена. Можно играть как гость.');
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
        setMessage('Код отправлен. Проверь почту или папку спам.');
      }
    } catch {
      setMessage('Не получилось отправить код. Попробуй еще раз.');
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
        setMessage('База Supabase не настроена. Можно играть как гость.');
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: code.trim(),
        type: 'email',
      });

      if (error) setMessage(error.message);
      else {
        setMessage('Вход выполнен. Открываю ночную смену.');
        onSuccess?.();
      }
    } catch {
      setMessage('Код неверный или устарел.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="auth-screen">
      <div className="auth-card">
        <span className="auth-kicker">Вход в игру</span>
        <h1>Шестёрочка Horror</h1>
        <p>Введи почту, получи одноразовый код и продолжай ночную смену. Можно закрыть окно и играть гостем.</p>

        {step === 'email' ? (
          <form onSubmit={sendCode} className="auth-form">
            <input
              type="email"
              placeholder="твоя почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <button type="submit" disabled={busy}>
              {busy ? 'Отправляю...' : 'Отправить код'}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className="auth-form">
            <input
              inputMode="numeric"
              placeholder="код из письма"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit" disabled={busy}>
              {busy ? 'Проверяю...' : 'Подтвердить код'}
            </button>
            <button type="button" className="ghost" onClick={() => setStep('email')}>
              Сменить почту
            </button>
          </form>
        )}

        {message && <p className="auth-message">{message}</p>}
        {onClose && (
          <button type="button" className="ghost auth-skip" onClick={onClose}>
            Назад
          </button>
        )}
      </div>
    </section>
  );
}
