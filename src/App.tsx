import React from 'react';
// hooks
import { useScrollToTop } from '/src/hooks/use-scroll-to-top';
// theme
import { ThemeProvider } from '/src/theme/context';
// routes
import Router from '/src/routes/sections';

// ----------------------------------------------------------------------

const App: React.FC = () => {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
