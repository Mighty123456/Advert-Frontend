import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  colors: {
    // Core Brand Colors (Exact Logo Colors)
    primary: string;    // Warm Yellow (252, 193, 8)
    secondary: string;  // Deep Navy (8, 46, 83)
    
    // Supporting Colors
    lightNavy: string;
    darkNavy: string;
    mutedYellow: string;
    brightYellow: string;
    white: string;
    offWhite: string;
    lightGray: string;
    
    // Text Colors
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textLight: string;
    
    // Interactive Colors
    hover: {
    primary: string;
    secondary: string;
    };
    
    // Status Colors
    success: string;
    error: string;
    warning: string;
    info: string;
    
    // Background Colors
    background: string;
    backgroundAlt: string;
    backgroundDark: string;
    
    // Border Colors
    border: string;
    borderLight: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const colors = {
    // Core Brand Colors (Exact Logo Colors)
    primary: 'rgb(252, 193, 8)',      // Warm Yellow - Exact logo color
    secondary: 'rgb(8, 46, 83)',      // Deep Navy - Exact logo color
    
    // Supporting Colors
    lightNavy: 'rgb(16, 66, 123)',    // Lighter navy for hover states
    darkNavy: 'rgb(4, 23, 42)',       // Darker navy for backgrounds
    mutedYellow: 'rgb(255, 215, 100)', // Muted yellow for subtle accents
    brightYellow: 'rgb(255, 200, 20)', // Brighter yellow for highlights
    white: 'rgb(255, 255, 255)',      // Pure white
    offWhite: 'rgb(250, 250, 250)',   // Off-white for backgrounds
    lightGray: 'rgb(245, 245, 245)',  // Light gray for subtle backgrounds
    
    // Text Colors
    textPrimary: 'rgb(8, 46, 83)',     // Deep Navy for primary text
    textSecondary: 'rgb(60, 80, 110)', // Secondary text
    textMuted: 'rgb(100, 120, 150)',   // Muted text
    textLight: 'rgb(255, 255, 255)',   // Light text for dark backgrounds
    
    // Interactive Colors
    hover: {
      primary: 'rgb(255, 215, 100)',   // Muted yellow for hover
      secondary: 'rgb(16, 66, 123)',   // Light navy for hover
    },
    
    // Status Colors
    success: 'rgb(34, 197, 94)',       // Green
    error: 'rgb(239, 68, 68)',         // Red
    warning: 'rgb(252, 193, 8)',       // Warm Yellow
    info: 'rgb(16, 66, 123)',          // Light Navy
    
    // Background Colors
    background: 'rgb(255, 255, 255)',  // Main background
    backgroundAlt: 'rgb(250, 250, 250)', // Alternative background
    backgroundDark: 'rgb(8, 46, 83)',  // Dark background using navy
    
    // Border Colors
    border: 'rgb(229, 231, 235)',      // Light border
    borderLight: 'rgb(243, 244, 246)', // Lighter border
  };

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}