import { useEffect } from 'react';

// ----------------------------------------------------------------------

interface ThemeProps {
  state: { currentTheme: 'light' | 'dark' };
}

// ----------------------------------------------------------------------

export const Theme = ({ state }: ThemeProps): void => {
  useEffect(() => {
    const html: HTMLHtmlElement | null = document.querySelector('html');

    if (state.currentTheme === 'light') {
      html?.classList.remove('dark');
      html?.classList.add('light');
    } else {
      html?.classList.remove('light');
      html?.classList.add('dark');
    }
  }, [state.currentTheme]);
};
