import { PAGES } from '@constants/route';
import NotFoundPage from '@pages/NotFound';
import type { RouteObject } from 'react-router-dom';

const NotFoundRoute: RouteObject = {
  path: PAGES.ANY,
  element: <NotFoundPage />,
};

export default NotFoundRoute;
