import { useRoutes } from 'react-router-dom';
import NotFoundRoute from './404';
import AdminRoute from './admin';
import AuthRoute from './auth';
import MainRoute from './main';

export default function Routes() {
  return useRoutes([AuthRoute, MainRoute, AdminRoute, NotFoundRoute]);
}
