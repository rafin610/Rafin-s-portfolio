import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      title={theme === 'midnight' ? 'Switch to Daylight' : 'Switch to Midnight'}
      aria-label={theme === 'midnight' ? 'Switch to daylight theme' : 'Switch to midnight theme'}
      aria-pressed={theme === 'daylight'}
      className="relative p-2 rounded-lg transition-all duration-300 cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{
        backgroundColor: 'var(--accent-primary)',
      }} />
      
      {/* Icon container with smooth transition */}
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative z-10 w-5 h-5 flex items-center justify-center"
      >
        {theme === 'midnight' ? (
          <Moon
            className="w-4 h-4 transition-colors duration-200"
            strokeWidth={1.5}
            style={{
              color: 'var(--text-muted)',
            }}
          />
        ) : (
          <Sun
            className="w-4 h-4 transition-colors duration-200"
            strokeWidth={1.5}
            style={{
              color: 'var(--accent-primary)',
            }}
          />
        )}
      </motion.div>

      {/* Subtle focus ring */}
      <div className="absolute inset-0 rounded-lg border transition-all duration-200 group-focus-visible:opacity-100" style={{
        borderColor: 'var(--border-default)',
        opacity: 0,
      }} />
    </motion.button>
  );
};
