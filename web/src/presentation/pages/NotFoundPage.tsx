import { AlertTriangle, ArrowLeft, Home } from 'lucide-react';
import { Navigation } from '@/presentation/components/Navigation';
import { Button } from '@/presentation/ui/button';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={onNavigate} currentPage="not-found" />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Error 404</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              The page you are looking for doesn't exist or has been moved. You can
              return to the homepage or explore another section.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={() => onNavigate('landing')}>
                <Home className="w-5 h-5" />
                Go to Home
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('verification')}>
                <ArrowLeft className="w-5 h-5" />
                Verify Evidence
              </Button>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="font-semibold mb-1">Need Proof?</p>
              <p className="text-xs text-muted-foreground">
                Verify any certificate or hash.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="font-semibold mb-1">Explore Features</p>
              <p className="text-xs text-muted-foreground">
                See how Sealium works end-to-end.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="font-semibold mb-1">Developer API</p>
              <p className="text-xs text-muted-foreground">
                Integrate certification in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

