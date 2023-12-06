import type { FC, PropsWithChildren } from 'react';
import ModalBackground from '../Background';
import { Container } from './style';

const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ModalBackground>
      <Container>{children}</Container>
    </ModalBackground>
  );
};

export default ModalContainer;
