import { useRoutes } from 'react-router-dom';
import DashboardRoute from './dashboard';
import NotFoundRoute from './404';

export default function Routes() {
	return useRoutes([DashboardRoute, NotFoundRoute]);
}
