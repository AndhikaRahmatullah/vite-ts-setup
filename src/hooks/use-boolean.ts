import React, { useCallback, useState } from 'react';

// ----------------------------------------------------------------------

interface UseBoolean {
  value: boolean;
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

// ----------------------------------------------------------------------

export const useBoolean = (defaultValue: boolean): UseBoolean => {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  const onToggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
};
