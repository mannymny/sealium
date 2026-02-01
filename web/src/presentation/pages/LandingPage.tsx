import { Navigation } from '@/presentation/components/Navigation';
import { HeroSection } from '@/presentation/components/HeroSection';
import { FeatureCard } from '@/presentation/components/FeatureCard';
import { GlobalActivityTable } from '@/presentation/components/GlobalActivityTable';
import { landingPageStyles } from '@/presentation/styles/LandingPage.styles';

interface LandingPageProps {
  onNavigate: (page: string) => void;
  onGetStarted: () => void;
  currentPage?: string;
}

export function LandingPage({ onNavigate, onGetStarted, currentPage }: LandingPageProps) {
  return (
    <div className={landingPageStyles.page}>
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      <HeroSection onGetStarted={onGetStarted} onViewPricing={() => onNavigate('pricing')} />
      <FeatureCard />
      
      <section className={landingPageStyles.activitySection}>
        <div className={landingPageStyles.activityContainer}>
          <GlobalActivityTable />
        </div>
      </section>
    </div>
  );
}
export { landingPageStyles };

