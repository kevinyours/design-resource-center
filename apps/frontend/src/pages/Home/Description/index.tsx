import type { PropsWithChildren } from 'react';
import { Container } from './style';

const Description = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Description;
