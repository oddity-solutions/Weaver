// import React from 'react';

import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import { HOME, DASHBOARD, CATCHER } from './routes';

// type Routes = {
//   HOME: React.FC,
//   DASHBOARD: React.FC,
//   CATCHER: React.FC,
// };

export const PATHS = {
  [HOME]: HomePage,
  [DASHBOARD]: Dashboard,
  [CATCHER]: HomePage,
};
