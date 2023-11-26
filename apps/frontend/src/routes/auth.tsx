import { PAGES } from '@constants/route';
import AuthenticatedLayout from '@layouts/Login';
import LoginPage from '@pages/Login';
import type { RouteObject } from 'react-router-dom';

const AuthRoute: RouteObject = {
  path: PAGES.AUTH.LOGIN,
  element: <AuthenticatedLayout />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
  ],
};

export default AuthRoute;
