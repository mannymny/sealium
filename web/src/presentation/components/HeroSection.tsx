import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/presentation/ui/button';
import { heroSectionStyles } from '@/presentation/components/HeroSection.styles';

interface HeroSectionProps {
  onGetStarted: () => void;
  onViewPricing?: () => void;
}

export function HeroSection({ onGetStarted, onViewPricing }: HeroSectionProps) {
  return (
    <section className={heroSectionStyles.section}>
      <div className={heroSectionStyles.container}>
        <div className={heroSectionStyles.badge}>
          <Sparkles className={heroSectionStyles.badgeIcon} />
          <span className={heroSectionStyles.badgeText}>New: Kick support added</span>
        </div>

        <h1 className={heroSectionStyles.headline}>
          Capture, Transcribe &amp; Certify
          <br />
          <span className={heroSectionStyles.highlight}>Digital Evidence</span>
        </h1>

        <p className={heroSectionStyles.subtitle}>
          Preserving web content with cryptographic integrity and verifiable proof.
          Built for developers, journalists, lawyers, researchers, and compliance teams.
        </p>

        <div className={heroSectionStyles.ctaRow}>
          <Button variant="primary" size="lg" onClick={onGetStarted}>
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={onViewPricing}>
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
