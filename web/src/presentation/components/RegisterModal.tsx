import { useState, type FormEvent } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/presentation/ui/button';
import { authModalStyles } from '../styles/AuthModal.styles';

interface RegisterModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
  onRegister: () => void;
}

export function RegisterModal({ onClose, onSwitchToLogin, onRegister }: RegisterModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (agreeToTerms) {
      onRegister();
    }
  };

  return (
    <div className={authModalStyles.overlay}>
      <div className={authModalStyles.backdrop} onClick={onClose} />

      <div className={authModalStyles.modal}>
        <div className={authModalStyles.header}>
          <h2 className={authModalStyles.title}>Create Account</h2>
          <p className={authModalStyles.subtitle}>
            Start securing your digital evidence today
          </p>
        </div>

        <form onSubmit={handleSubmit} className={authModalStyles.form}>
          <div>
            <label htmlFor="name" className={authModalStyles.fieldLabel}>
              Full Name
            </label>
            <div className={authModalStyles.inputWrap}>
              <User className={authModalStyles.inputIconLeft} />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className={authModalStyles.input}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={authModalStyles.fieldLabel}>
              Email
            </label>
            <div className={authModalStyles.inputWrap}>
              <Mail className={authModalStyles.inputIconLeft} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className={authModalStyles.input}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className={authModalStyles.fieldLabel}>
              Password
            </label>
            <div className={authModalStyles.inputWrap}>
              <Lock className={authModalStyles.inputIconLeft} />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="��������"
                className={authModalStyles.inputPassword}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={authModalStyles.iconButton}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Eye className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
            <p className={authModalStyles.helperText}>
              Must be at least 8 characters
            </p>
          </div>

          <div>
            <label className={authModalStyles.termsLabel}>
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className={authModalStyles.termsCheckbox}
                required
              />
              <span className={authModalStyles.termsText}>
                I agree to the{' '}
                <button type="button" className={authModalStyles.termsLink}>
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className={authModalStyles.termsLink}>
                  Privacy Policy
                </button>
              </span>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className={authModalStyles.buttonFull}
            disabled={!agreeToTerms}
          >
            Create Account
          </Button>
        </form>

        <div className={authModalStyles.divider}>
          <div className={authModalStyles.dividerLine} />
          <span className={authModalStyles.dividerText}>or</span>
          <div className={authModalStyles.dividerLine} />
        </div>

        <div className={authModalStyles.socialWrap}>
          <button className={authModalStyles.socialButton}>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <p className={authModalStyles.footerText}>
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className={authModalStyles.footerLink}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

