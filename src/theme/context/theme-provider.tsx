import React, { useMemo, useCallback, useEffect, ReactNode } from 'react';
// config-global
import { THEME_KEY } from '/src/config-global';
// hooks
import { useLocalStorage, getStorage } from '/src/hooks/use-local-storage';
//
import { Theme } from '../theme';
import { ThemeContext } from './theme-context';

// ----------------------------------------------------------------------
// TYPES

type StateValue = string | number | object | boolean | any[];

interface LocalStorage {
  state: InitialState;
  update: (name: string, updateValue: StateValue) => void;
  reset: () => void;
}

interface InitialState {
  currentTheme: 'light' | 'dark';
  name: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export interface UseContextProps {
  currentTheme: 'light' | 'dark';
  name: string;
  onUpdateTheme: () => void;
  onReset: () => void;
}

// ----------------------------------------------------------------------

const initialState: InitialState = {
  currentTheme: 'light',
  name: 'light',
};

// ----------------------------------------------------------------------

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const { state, update, reset } = useLocalStorage(THEME_KEY, initialState) as LocalStorage;

  // ----------------------------------------------------------------------

  const automaticUpdateState = useCallback(() => {
    // NAME
    function onUpdateName(): string {
      if (state.currentTheme === 'light') {
        return 'light';
      } else {
        return 'dark';
      }
    }

    const updateName = onUpdateName();
    update('name', updateName);
  }, [update, state.currentTheme]);

  // ----------------------------------------------------------------------
  // SET PREV STATE ON REFRESH PAGE

  useEffect(() => {
    const restored = getStorage(THEME_KEY);

    if (restored) {
      automaticUpdateState();
    }
  }, [state.currentTheme, automaticUpdateState]);

  // ----------------------------------------------------------------------

  Theme({ state: state });

  // CURRENT THEME
  const onUpdateTheme = useCallback(() => {
    if (state.currentTheme === 'light') {
      update('currentTheme', 'dark');
    }

    if (state.currentTheme === 'dark') {
      update('currentTheme', 'light');
    }
  }, [update, state.currentTheme]);

  // RESET
  const onReset = useCallback(() => {
    reset();
  }, [reset]);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      //
      onUpdateTheme,
      onReset,
    }),
    [onUpdateTheme, onReset, state]
  );

  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};
