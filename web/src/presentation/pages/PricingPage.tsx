import { useState, type ReactNode } from 'react';
import { Check, Sparkles, Building2, Zap, X, HelpCircle, Shield, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/presentation/ui/button';
import { Navigation } from '@/presentation/components/Navigation';

interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  recommended?: boolean;
  icon: ReactNode;
  cta: string;
  badge?: string;
}

interface PricingPageProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
    period: 'forever',
    description: 'Perfect for trying out Sealium',
    icon: <Sparkles className="w-6 h-6" />,
    cta: 'Get Started Free',
    badge: 'No credit card required',
    features: [
      '10 transcriptions per month',
      'Basic watermarked proofs',
      'Public visibility only',
      'Email support (48hr response)',
      '7-day data retention',
      'Browser upload only',
    ],
    notIncluded: [
      'No API access',
      'No priority processing',
      'No custom branding',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    annualPrice: 470,
    period: 'per month',
    description: 'For professionals and small teams',
    icon: <Zap className="w-6 h-6" />,
    cta: 'Start 14-Day Free Trial',
    recommended: true,
    badge: 'Most Popular',
    features: [
      'Unlimited transcriptions',
      'Private & downloadable proofs',
      'Branded certificates (PDF)',
      'Priority processing (2x faster)',
      '90-day data retention',
      'Advanced verification tools',
      'API access (100k calls/month)',
      'Email support (4hr response)',
      'Batch upload (up to 50 files)',
      'Custom metadata fields',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    period: 'custom pricing',
    description: 'For organizations at scale',
    icon: <Building2 className="w-6 h-6" />,
    cta: 'Contact Sales',
    badge: 'Custom Solutions',
    features: [
      'Everything in Pro, plus:',
      'Unlimited API calls',
      'Custom data retention policies',
      'Team accounts & role management',
      'SSO & advanced security',
      'Dedicated account manager',
      '99.9% SLA guarantee',
      'Priority phone support',
      'Compliance reports (SOC 2, GDPR)',
      'On-premise deployment option',
      'Custom integrations',
      'White-label solutions',
    ],
  },
];

const comparisonFeatures = [
  { name: 'Transcriptions per month', free: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Proof certifications', free: 'Watermarked', pro: 'Private', enterprise: 'White-label' },
  { name: 'Data retention', free: '7 days', pro: '90 days', enterprise: 'Custom' },
  { name: 'API access', free: '-', pro: '100k/month', enterprise: 'Unlimited' },
  { name: 'Processing speed', free: 'Standard', pro: '2x faster', enterprise: 'Priority' },
  { name: 'Support SLA', free: '48 hours', pro: '4 hours', enterprise: '1 hour' },
  { name: 'Team accounts', free: '-', pro: '-', enterprise: 'Yes' },
  { name: 'SSO', free: '-', pro: '-', enterprise: 'Yes' },
];

const faqs = [
  {
    question: 'Can I switch plans at any time?',
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for Enterprise plans.',
  },
  {
    question: 'Is there a free trial for Pro?',
    answer: 'Yes! Try Pro free for 14 days with no credit card required. Cancel anytime during the trial period.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You can export all your data before canceling. After cancellation, data is retained for 30 days before permanent deletion.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'Yes! We offer 30% discounts for verified nonprofits, educational institutions, and journalists. Contact sales for details.',
  },
  {
    question: 'How does cryptographic certification work?',
    answer: 'We use blockchain-backed timestamping and digital signatures to create tamper-proof verification. Every certification includes a unique hash that can be independently verified.',
  },
];

export function PricingPage({ onNavigate, currentPage }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const calculateSavings = (monthly: number, annual: number) => {
    if (monthly === 0) return 0;
    const monthlyCost = monthly * 12;
    const savings = ((monthlyCost - annual) / monthlyCost) * 100;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              Choose the Right Plan for Your Needs
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transparent pricing with no hidden fees. All plans include cryptographic certification
              and end-to-end encryption.
            </p>

            
            <div className="inline-flex items-center gap-2 sm:gap-3 p-1.5 bg-muted rounded-xl">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 sm:px-6 py-2.5 rounded-lg transition-all font-medium text-sm sm:text-base whitespace-nowrap ${
                  billingCycle === 'monthly'
                    ? 'bg-card shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 sm:px-6 py-2.5 rounded-lg transition-all font-medium relative text-sm sm:text-base whitespace-nowrap ${
                  billingCycle === 'annual'
                    ? 'bg-card shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <span className="absolute -top-3 -right-2 bg-success text-success-foreground text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-center gap-4 lg:gap-8 mb-12 sm:mb-16 text-xs sm:text-sm text-muted-foreground max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-success shrink-0" />
              <span className="whitespace-nowrap">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Users className="w-4 sm:w-5 h-4 sm:h-5 text-success shrink-0" />
              <span className="whitespace-nowrap">10,000+ Users</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Award className="w-4 sm:w-5 h-4 sm:h-5 text-success shrink-0" />
              <span className="whitespace-nowrap">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-success shrink-0" />
              <span className="whitespace-nowrap">14-Day Free Trial</span>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-20">
            {tiers.map((tier) => {
              const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
              const displayPrice = tier.monthlyPrice === 0 ? 0 : billingCycle === 'annual' ? Math.round(price / 12) : price;
              const savings = calculateSavings(tier.monthlyPrice, tier.annualPrice);

              return (
                <div
                  key={tier.name}
                  className={`bg-card rounded-2xl p-6 sm:p-8 border-2 transition-all hover:shadow-xl relative ${
                    tier.recommended
                      ? 'border-primary shadow-lg md:scale-105'
                      : 'border-border'
                  }`}
                >
                  
                  {tier.badge && (
                    <div
                      className={`absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap ${
                        tier.recommended
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'bg-muted border border-border'
                      }`}
                    >
                      {tier.badge}
                    </div>
                  )}

                  
                  <div className="flex items-center gap-3 mb-4 mt-2 sm:mt-4">
                    <div
                      className={`p-2 sm:p-3 rounded-lg ${
                        tier.recommended ? 'bg-primary/10 text-primary' : 'bg-muted'
                      }`}
                    >
                      {tier.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{tier.name}</h3>
                    </div>
                  </div>

                  
                  <div className="mb-2">
                    {tier.monthlyPrice === 0 ? (
                      <span className="text-3xl sm:text-4xl font-bold">Free</span>
                    ) : (
                      <>
                        <span className="text-3xl sm:text-4xl font-bold">${displayPrice}</span>
                        <span className="text-muted-foreground ml-2 text-sm sm:text-base">/ month</span>
                      </>
                    )}
                  </div>

                  {billingCycle === 'annual' && tier.monthlyPrice > 0 && (
                    <p className="text-sm text-success mb-2">
                      Save ${tier.monthlyPrice * 12 - tier.annualPrice} per year ({savings}% off)
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                    {tier.description}
                  </p>

                  
                  <Button
                    variant={tier.recommended ? 'primary' : 'outline'}
                    className="w-full mb-6"
                    size="lg"
                  >
                    {tier.cta}
                  </Button>

                  
                  <div className="space-y-3 mb-4">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      What's included:
                    </p>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            tier.recommended ? 'bg-primary/10' : 'bg-muted'
                          }`}
                        >
                          <Check
                            className={`w-4 h-4 ${
                              tier.recommended ? 'text-primary' : 'text-muted-foreground'
                            }`}
                          />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  
                  {tier.notIncluded && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      {tier.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-60">
                          <div className="p-1 rounded-full shrink-0 mt-0.5 bg-muted">
                            <X className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-start sm:items-center gap-3 px-4 sm:px-6 py-4 bg-success/10 border border-success/20 rounded-xl max-w-lg mx-auto">
              <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-success shrink-0 mt-1 sm:mt-0" />
              <div className="text-left">
                <p className="font-medium text-sm sm:text-base">30-Day Money-Back Guarantee</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Not satisfied? Get a full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>

          
          <div className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 px-4">
              Detailed Feature Comparison
            </h2>

            
            <div className="hidden sm:block bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-left px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base">Feature</th>
                    <th className="text-center px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base">Free</th>
                    <th className="text-center px-4 sm:px-6 py-4 font-semibold bg-primary/5 text-sm sm:text-base">
                      <div className="flex items-center justify-center gap-2">
                        <span>Pro</span>
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      </div>
                    </th>
                    <th className="text-center px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-4 sm:px-6 py-4 font-medium text-sm sm:text-base">{feature.name}</td>
                      <td className="px-4 sm:px-6 py-4 text-center text-muted-foreground text-sm sm:text-base">
                        {feature.free}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center bg-primary/5 font-medium text-sm sm:text-base">
                        {feature.pro}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center text-muted-foreground text-sm sm:text-base">
                        {feature.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
            <div className="sm:hidden space-y-4">
              {comparisonFeatures.map((feature, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4">
                  <p className="font-semibold mb-3 text-sm">{feature.name}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Free</p>
                      <p className="font-medium">{feature.free}</p>
                    </div>
                    <div className="text-center bg-primary/5 rounded p-2">
                      <p className="text-muted-foreground mb-1">Pro</p>
                      <p className="font-semibold">{feature.pro}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Enterprise</p>
                      <p className="font-medium">{feature.enterprise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 px-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-accent transition-colors gap-4"
                    aria-expanded={expandedFaq === i}
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-sm sm:text-base">{faq.question}</span>
                    </div>
                    <div
                      className={`transform transition-transform shrink-0 ${
                        expandedFaq === i ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-4 sm:px-6 pb-4 pt-2 text-muted-foreground leading-relaxed text-sm sm:text-base animate-in fade-in slide-in-from-top-2 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          
          <div className="mt-12 sm:mt-20 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-6 sm:p-12 border border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of professionals who trust Sealium for verifiable digital evidence.
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <span className="ml-2">-&gt;</span>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-6 px-4">
              No credit card required - 14-day free trial - Cancel anytime
            </p>
          </div>

          
          <div className="mt-8 sm:mt-12 text-center px-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              Questions about pricing or need a custom plan?{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                Contact our sales team
              </a>
              {' '}or{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                view documentation
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

