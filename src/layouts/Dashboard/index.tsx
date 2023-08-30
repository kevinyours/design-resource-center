import Sidebar from '@components/Sidebar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Content } from './style';

const DashboardLayout: FC = () => {
	return (
		<Container>
			<Content>
				<Sidebar />
				<Outlet />
			</Content>
		</Container>
	);
};

export default DashboardLayout;
