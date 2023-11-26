import type { FC, ReactNode } from 'react';
import { Container } from './style';

interface ItemProps {
  icon: ReactNode;
  name: string;
}

const Item: FC<ItemProps> = ({ icon, name }) => {
  return (
    <Container>
      {icon}
      <span>{name}</span>
    </Container>
  );
};

export default Item;
