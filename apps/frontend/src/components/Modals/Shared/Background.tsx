import type { FC, PropsWithChildren } from 'react';
import { Container } from './style';

const ModalBackground: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ModalBackground;
