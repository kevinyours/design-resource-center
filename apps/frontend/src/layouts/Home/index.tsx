import CompleteModal from '@components/Modals/Complete';
import Sidebar from '@components/Sidebar';
import { completeModalStatus } from '@stores/atoms/modals';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Container, Content, Layout } from './style';

const HomeLayout: FC = () => {
  const completeModalState = useRecoilValue(completeModalStatus);

  return (
    <Container>
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
      {completeModalState && <CompleteModal />}
    </Container>
  );
};

export default HomeLayout;
