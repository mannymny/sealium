import {
  LayoutDashboard,
  FileText,
  Shield,
  CreditCard,
  Key,
  Settings,
  LogOut,
  X,
  Activity,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { ThemeToggle } from '@/presentation/components/ThemeToggle';
import { UsageStatsWidget } from '@/presentation/components/UsageStatsWidget';
import { sidebarStyles } from '@/presentation/components/Sidebar.styles';
import { RavenLogo } from '@/presentation/components/RavenLogo';

type MenuItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className={sidebarStyles.navIcon} /> },
  { id: 'transcriptions', label: 'Transcriptions', icon: <FileText className={sidebarStyles.navIcon} /> },
  { id: 'proofs', label: 'Proofs', icon: <Shield className={sidebarStyles.navIcon} /> },
  { id: 'billing', label: 'Billing', icon: <CreditCard className={sidebarStyles.navIcon} /> },
  { id: 'api-keys', label: 'API Keys', icon: <Key className={sidebarStyles.navIcon} /> },
  { id: 'settings', label: 'Settings', icon: <Settings className={sidebarStyles.navIcon} /> },
];

interface SidebarProps {
  activeItem: string;
  onItemClick: (id: string) => void;
  onLogout: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  onShowActivity?: () => void;
}

export function Sidebar({ activeItem, onItemClick, onLogout, isOpen = false, onClose, onShowActivity }: SidebarProps) {
  const handleItemClick = (id: string) => {
    onItemClick(id);
    onClose?.();
  };

  return (
    <aside
      className={`${sidebarStyles.asideBase} ${isOpen ? sidebarStyles.asideOpen : sidebarStyles.asideClosed}`}
    >
      <div className={sidebarStyles.header}>
        <div className={sidebarStyles.logoRow}>
          <RavenLogo className={sidebarStyles.logoIcon} />
          <span className={sidebarStyles.logoText}>Sealium</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={sidebarStyles.closeButton}
            aria-label="Close menu"
          >
            <X className={sidebarStyles.logoIcon} />
          </button>
        )}
      </div>

      <nav className={sidebarStyles.nav}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={sidebarStyles.navItem(activeItem === item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

        {onShowActivity && (
          <div className={sidebarStyles.mobileSection}>
            <button
              onClick={() => {
                onShowActivity();
                onClose?.();
              }}
              className={sidebarStyles.activityButton}
            >
              <Activity className={sidebarStyles.navIcon} />
              <span>Global Activity</span>
            </button>
          </div>
        )}

        <div className={sidebarStyles.mobileSectionSpacer}>
          <UsageStatsWidget />
        </div>

        <div className={sidebarStyles.themeWrap}>
          <ThemeToggle showLabel />
        </div>
      </nav>

      <div className={sidebarStyles.footer}>
        <div className={sidebarStyles.profileRow}>
          <div className={sidebarStyles.avatar}>
            JD
          </div>
          <div className={sidebarStyles.profileTextWrap}>
            <p className={sidebarStyles.profileName}>John Doe</p>
            <p className={sidebarStyles.profilePlan}>Pro Plan</p>
          </div>
        </div>
        <button
          onClick={() => {
            onLogout();
            onClose?.();
          }}
          className={sidebarStyles.logoutButton}
        >
          <LogOut className={sidebarStyles.navIcon} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
