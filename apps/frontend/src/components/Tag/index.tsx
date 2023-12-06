import type { FC, PropsWithChildren } from 'react';
import { Container } from './style';

const Tag: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Tag;
