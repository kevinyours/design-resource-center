import Empty from '@components/Empty';
import FloatingController from '@components/FloatingController';
import type { FC } from 'react';
import Header from './Header';
import { Container, Content } from './style';

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Empty />
      </Content>
      <FloatingController style={{ position: 'absolute', bottom: 120 }} />
    </Container>
  );
};

export default HomePage;
