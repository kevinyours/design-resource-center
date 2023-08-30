import type { RouteObject } from 'react-router-dom';
import { PAGES } from '@constants/route';
import DashboardLayout from '@layouts/Dashboard';
import HomePage from '@pages/Home';

const DashboardRoute: RouteObject = {
	path: PAGES.DASHBOARD.HOME,
	element: <DashboardLayout />,
	children: [
		{
			index: true,
			element: <HomePage />,
		},
		// {
		// 	path: PAGES.DASHBOARD.PHOTO,
		// 	element: <></>,
		// },
	],
};

export default DashboardRoute;
