import type { FC } from 'react';
import Header from './Header';
import { Container } from './style';

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default HomePage;
