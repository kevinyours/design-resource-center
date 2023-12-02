import { PAGES } from '@constants/route';
import AdminLayout from '@layouts/Admin';
import AdminPage from '@pages/Admin';
import type { RouteObject } from 'react-router-dom';

const AdminRoute: RouteObject = {
  path: PAGES.ADMIN.HOME,
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <AdminPage />,
    },
  ],
};

export default AdminRoute;
