import React from 'react';
// hooks
import { useScrollToTop } from '/src/hooks/use-scroll-to-top';
// routes
import Router from '/src/routes/sections';

// ----------------------------------------------------------------------

const App: React.FC = () => {
  useScrollToTop();

  return <Router />;
};

export default App;
