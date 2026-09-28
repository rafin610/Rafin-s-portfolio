import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'midnight' | 'daylight';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('midnight');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedTheme = window.localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme === 'daylight' || storedTheme === 'midnight' ? storedTheme : 'midnight';
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (typeof document === 'undefined') return;

    const html = document.documentElement;
    
    if (newTheme === 'midnight') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'daylight');
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'midnight' ? 'daylight' : 'midnight';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return a default context to prevent errors during SSR or before hydration
    return {
      theme: 'midnight',
      toggleTheme: () => {},
    };
  }
  return context;
};
