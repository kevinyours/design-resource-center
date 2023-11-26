import type { PropsWithChildren } from 'react';
import { Container } from './style';

const Title = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Title;
