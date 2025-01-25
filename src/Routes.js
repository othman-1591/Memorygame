import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Game = React.lazy(() => import('./pages/Game'));
const History = React.lazy(() => import('./pages/History'));

const AppRoutes = () => (
  <Suspense fallback="Loading...">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
