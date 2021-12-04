import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import { HOME, DASHBOARD, CATCHER } from './routes';

export const PATHS = {
  [HOME]: HomePage,
  [DASHBOARD]: Dashboard,
  [CATCHER]: HomePage,
};
