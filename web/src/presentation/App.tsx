import { useState } from 'react';
import { ThemeProvider } from '@/application/contexts/ThemeContext';
import { ApiPage } from '@/presentation/pages/ApiPage';
import { Dashboard } from '@/presentation/pages/Dashboard';
import { HowItWorksPage } from '@/presentation/pages/HowItWorksPage';
import { LandingPage } from '@/presentation/pages/LandingPage';
import { NotFoundPage } from '@/presentation/pages/NotFoundPage';
import { PricingPage } from '@/presentation/pages/PricingPage';
import { VerificationPage } from '@/presentation/pages/VerificationPage';
import { LoginModal } from '@/presentation/components/LoginModal';
import { RegisterModal } from '@/presentation/components/RegisterModal';
import { Modal, View, isView } from '@/domain/navigation';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [modal, setModal] = useState<Modal>(null);

  const handleNavigate = (page: string) => {
    if (page === 'login' || page === 'register') {
      setModal(page as Modal);
      return;
    }
    if (isView(page)) {
      setView(page);
      return;
    }
    setView('not-found');
  };

  const handleLogin = () => {
    setModal(null);
    setView('dashboard');
  };

  const handleRegister = () => {
    setModal(null);
    setView('dashboard');
  };

  const handleLogout = () => {
    setView('landing');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {view === 'landing' && (
          <LandingPage
            onNavigate={handleNavigate}
            onGetStarted={() => setModal('register')}
            currentPage={view}
          />
        )}

        {view === 'pricing' && <PricingPage onNavigate={handleNavigate} currentPage={view} />}

        {view === 'how-it-works' && <HowItWorksPage onNavigate={handleNavigate} currentPage={view} />}

        {view === 'verification' && <VerificationPage onNavigate={handleNavigate} currentPage={view} />}

        {view === 'api' && <ApiPage onNavigate={handleNavigate} currentPage={view} />}

        {view === 'dashboard' && <Dashboard onLogout={handleLogout} />}
        {view === 'not-found' && <NotFoundPage onNavigate={handleNavigate} />}

        
        {modal === 'login' && (
          <LoginModal
            onClose={() => setModal(null)}
            onSwitchToRegister={() => setModal('register')}
            onLogin={handleLogin}
          />
        )}

        {modal === 'register' && (
          <RegisterModal
            onClose={() => setModal(null)}
            onSwitchToLogin={() => setModal('login')}
            onRegister={handleRegister}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

