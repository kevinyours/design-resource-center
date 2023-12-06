import type { FC, PropsWithChildren } from 'react';
import { Container } from './style';

const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ModalContainer;
