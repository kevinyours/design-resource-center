import NotFoundPage from '@pages/NotFound';
import type { RouteObject } from 'react-router-dom';

const NotFoundRoute: RouteObject = {
	path: '*',
	element: <NotFoundPage />,
};

export default NotFoundRoute;
