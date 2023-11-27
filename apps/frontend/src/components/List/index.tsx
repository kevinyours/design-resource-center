import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Container, Item } from './style';

interface ListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  items: Array<{ value: string; key: string }>;
}

const List: FC<ListProps> = ({ items, ...rest }) => {
  return (
    <Container {...rest}>
      {items.map(({ value, key }) => (
        <Item key={key}>{value}</Item>
      ))}
    </Container>
  );
};

export default List;
