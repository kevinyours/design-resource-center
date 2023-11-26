import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Container, Content, Layout } from './style';

const HomeLayout: FC = () => {
  return (
    <Container>
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Container>
  );
};

export default HomeLayout;
