import { useState } from 'react';
import { Sidebar } from '@/presentation/components/Sidebar';
import { ActivityTable } from '@/presentation/components/ActivityTable';
import { SettingsPage } from '@/presentation/pages/SettingsPage';
import { TranscriptionsPage } from '@/presentation/pages/TranscriptionsPage';
import { ProofsPage } from '@/presentation/pages/ProofsPage';
import { UsageStatsWidget } from '@/presentation/components/UsageStatsWidget';
import { GlobalActivityTable } from '@/presentation/components/GlobalActivityTable';
import { Modal } from '@/presentation/components/Modal';
import { Menu } from 'lucide-react';

type FilterType = 'all' | 'transcriptions' | 'proofs';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);

  return (
    <div className="flex min-h-screen">
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        activeItem={activeMenuItem}
        onItemClick={(id) => {
          setActiveMenuItem(id);
          setSidebarOpen(false);
        }}
        onLogout={onLogout}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onShowActivity={() => setShowActivityModal(true)}
      />

      
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
        
        <div className="lg:hidden mb-6 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">
            {activeMenuItem === 'dashboard' && 'Dashboard'}
            {activeMenuItem === 'settings' && 'Settings'}
            {activeMenuItem === 'transcriptions' && 'Transcriptions'}
            {activeMenuItem === 'proofs' && 'Proofs'}
            {activeMenuItem === 'billing' && 'Billing'}
            {activeMenuItem === 'api-keys' && 'API Keys'}
          </h1>
        </div>

        {activeMenuItem === 'dashboard' && (
          <>
            
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 hidden lg:block">Global Activity</h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Real-time evidence capture and certification activity across your organization
              </p>
            </div>

            
            <div className="grid lg:grid-cols-[1fr_320px] gap-6">
              
              <div className="space-y-6">
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      filter === 'all'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border hover:bg-accent'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter('transcriptions')}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      filter === 'transcriptions'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border hover:bg-accent'
                    }`}
                  >
                    Transcriptions
                  </button>
                  <button
                    onClick={() => setFilter('proofs')}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      filter === 'proofs'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border hover:bg-accent'
                    }`}
                  >
                    Proofs
                  </button>
                </div>

                
                <ActivityTable filter={filter} />
              </div>

              
              <div className="hidden lg:block">
                <UsageStatsWidget />
              </div>
            </div>
          </>
        )}

        {activeMenuItem === 'settings' && <SettingsPage />}

        {activeMenuItem === 'transcriptions' && <TranscriptionsPage />}

        {activeMenuItem === 'proofs' && <ProofsPage />}

        {activeMenuItem === 'billing' && (
          <div className="max-w-6xl">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 hidden lg:block">Billing</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              View billing information in Settings
            </p>
            <div className="text-center py-12 sm:py-20 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground">Please navigate to Settings -> Billing to manage your subscription</p>
            </div>
          </div>
        )}

        {activeMenuItem === 'api-keys' && (
          <div className="max-w-6xl">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 hidden lg:block">API Keys</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              View API keys in Settings
            </p>
            <div className="text-center py-12 sm:py-20 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground">Please navigate to Settings -> API Keys to manage your keys</p>
            </div>
          </div>
        )}
      </main>

      
      {showActivityModal && (
        <Modal onClose={() => setShowActivityModal(false)}>
          <div className="max-w-4xl w-full max-h-[85vh] overflow-y-auto">
            <GlobalActivityTable />
          </div>
        </Modal>
      )}
    </div>
  );
}

