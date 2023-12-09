import { useEffect, useState, useCallback } from 'react';

// ----------------------------------------------------------------------

type Value = string | number | object | boolean | any[];

interface UseLocalStorage {
  state: object;
  update: (name: string, updateValue: Value) => void;
  reset: () => void;
}

// ----------------------------------------------------------------------

export const useLocalStorage = (key: string, initialState: object): UseLocalStorage => {
  const [state, setState] = useState<object>(initialState);

  useEffect(() => {
    const restored = getStorage(key);

    if (restored) {
      setState((prevValue) => ({
        ...prevValue,
        ...restored,
      }));
    }
  }, [key]);

  const updateState = useCallback(
    (updateValue: object) => {
      setState((prevValue) => {
        setStorage(key, {
          ...prevValue,
          ...updateValue,
        });

        return {
          ...prevValue,
          ...updateValue,
        };
      });
    },
    [key]
  );

  const update = useCallback(
    (name: string, updateValue: Value) => {
      updateState({
        [name]: updateValue,
      });
    },
    [updateState]
  );

  const reset = useCallback(() => {
    removeStorage(key);
    setState(initialState);
  }, [initialState, key]);

  return {
    state,
    update,
    reset,
  };
};

// ----------------------------------------------------------------------

interface GetStorage {
  value: object | null;
}

// ----------------------------------------------------------------------

export const getStorage = (key: string): GetStorage => {
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

export const setStorage = (key: string, value: object): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeStorage = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
