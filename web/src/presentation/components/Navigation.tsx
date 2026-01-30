import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/presentation/components/ThemeToggle';
import { Button } from '@/presentation/ui/button';
import { navigationStyles } from '@/presentation/components/Navigation.styles';
import { RavenLogo } from '@/presentation/components/RavenLogo';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage = 'landing' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'verification', label: 'Verification' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'api', label: 'API' },
  ];

  const isActive = (itemId: string) => {
    return currentPage === itemId;
  };

  return (
    <nav className={navigationStyles.nav}>
      <div className={navigationStyles.container}>
        <div className={navigationStyles.bar}>
          <button
            onClick={() => onNavigate('landing')}
            className={navigationStyles.logoButton}
          >
            <RavenLogo className={navigationStyles.logoIcon} />
            <span className={navigationStyles.logoText}>Sealium</span>
          </button>

          <div className={navigationStyles.desktopNav}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={navigationStyles.navItem(isActive(item.id))}
              >
                {item.label}
                {isActive(item.id) && (
                  <span className={navigationStyles.navIndicator} />
                )}
              </button>
            ))}
          </div>

          <div className={navigationStyles.desktopActions}>
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => onNavigate('login')}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={() => onNavigate('register')}>
              Get Started
            </Button>
          </div>

          <div className={navigationStyles.mobileActions}>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={navigationStyles.mobileMenuButton}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={navigationStyles.mobileMenu}>
          <div className={navigationStyles.mobileMenuInner}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={navigationStyles.mobileNavItem(isActive(item.id))}
              >
                {item.label}
              </button>
            ))}
            <div className={navigationStyles.mobileActionsBlock}>
              <Button
                variant="ghost"
                size="md"
                className={navigationStyles.mobileButtonFull}
                onClick={() => {
                  onNavigate('login');
                  setMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="md"
                className={navigationStyles.mobileButtonFull}
                onClick={() => {
                  onNavigate('register');
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
