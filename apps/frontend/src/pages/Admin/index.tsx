import FileUploadModal from '@components/Modals/Upload';
import Table from '@components/Table';
import type { FC } from 'react';
import Header from './Header';
import Search from './Search';
import { tableBodyMockData } from './mock';
import { Container, Content } from './style';

const AdminPage: FC = () => {
  return (
    <Container>
      <Header />
      <Search />
      <Content>
        <Table data={tableBodyMockData} />
      </Content>
      <FileUploadModal />
      {/* <FloatingEditor style={{ position: 'absolute', bottom: 120 }} /> */}
    </Container>
  );
};

export default AdminPage;
