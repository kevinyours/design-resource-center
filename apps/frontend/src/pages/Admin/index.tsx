import FloatingEditor from '@components/FloatingEditor';
import Table from '@components/Table';
import type { FC } from 'react';
import Header from './Header';
import Search from './Search';
import { Container, Content } from './style';

const AdminPage: FC = () => {
  return (
    <Container>
      <Header />
      <Search />
      <Content>
        <Table />
      </Content>
      <FloatingEditor style={{ position: 'absolute', bottom: 120 }} />
    </Container>
  );
};

export default AdminPage;
