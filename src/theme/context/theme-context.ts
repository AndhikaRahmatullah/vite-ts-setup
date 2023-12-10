import { createContext, useContext } from 'react';
//
import { UseContextProps } from './theme-provider';

// ----------------------------------------------------------------------

export const ThemeContext = createContext<UseContextProps | null>(null);

export const useThemeContext = (): UseContextProps => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useThemeContext must be use inside ThemeProvider');

  return context;
};
