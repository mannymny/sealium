import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/application/contexts/ThemeContext';
import { themeToggleStyles } from '@/presentation/components/ThemeToggle.styles';

interface ThemeToggleProps {
  showLabel?: boolean;
}

export function ThemeToggle({ showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={themeToggleStyles.button}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={themeToggleStyles.iconWrap}>
        {theme === 'light' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </div>
      {showLabel && (
        <span className={themeToggleStyles.label}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
      )}
    </button>
  );
}
