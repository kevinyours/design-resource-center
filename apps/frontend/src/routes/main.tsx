import { PAGES } from '@constants/route';
import HomeLayout from '@layouts/Home';
import HomePage from '@pages/Home';
import type { RouteObject } from 'react-router-dom';

const MainRoute: RouteObject = {
  path: PAGES.MAIN.HOME,
  element: <HomeLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

export default MainRoute;
