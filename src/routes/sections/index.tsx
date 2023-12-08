import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes, Outlet } from 'react-router-dom';
// pages
const HomePage = lazy(() => import('/src/pages/home/app'));

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={'Loading Components'}>
          <Outlet />
        </Suspense>
      ),
      children: [{ path: '', element: <HomePage /> }],
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;
