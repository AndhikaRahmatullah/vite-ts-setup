import React, { useMemo, useCallback, useState, useEffect, ReactNode } from 'react';
//
import { Theme } from '../theme';
import { ThemeContext } from './theme-context';

// ----------------------------------------------------------------------
// TYPES

type Value = string | number | object | boolean | any[];

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
// LOCAL STORAGE

const getStorage = (key: string): InitialState => {
  let value = null;

  try {
    const result = window.localStorage.getItem(key);

    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }

  return value;
};

const setStorage = (key: string, value: InitialState): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

const removeStorage = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

// ----------------------------------------------------------------------

const STORAGE_KEY = 'theme';

const initialState: InitialState = {
  currentTheme: 'light',
  name: 'dika',
};

// ----------------------------------------------------------------------

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [state, setState] = useState<InitialState>(initialState);

  // ----------------------------------------------------------------------
  // UPDATE STATE

  const updateState = useCallback(
    (updateValue: InitialState) => {
      setState((prevValue) => {
        setStorage(STORAGE_KEY, {
          ...prevValue,
          ...updateValue,
        });

        return {
          ...prevValue,
          ...updateValue,
        };
      });
    },
    [STORAGE_KEY]
  );

  const update = useCallback(
    (name: string, updateValue: Value) => {
      updateState({
        ...state,
        [name]: updateValue,
      });
    },
    [updateState, state]
  );

  // ----------------------------------------------------------------------

  // ----------------------------------------------------------------------
  // SET PREV STATE ON REFRESH PAGE

  useEffect(() => {
    const restored = getStorage(STORAGE_KEY);

    if (restored) {
      setState(restored);
    }
  }, []);

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

  // Reset
  const onReset = useCallback(() => {
    removeStorage(STORAGE_KEY);
  }, [removeStorage]);

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
