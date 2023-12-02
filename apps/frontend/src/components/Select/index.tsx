import { ReactComponent as ArrowBottom } from '@assets/directions/arrow_bottom_white.svg';
import List from '@components/List';
import type { ItemProps } from '@interfaces/shared';
import type { FC } from 'react';
import { useSelect } from './hooks';
import { Container } from './style';

interface SelectProps {
  items?: ItemProps[];
}

const Select: FC<SelectProps> = ({ items = [] }) => {
  const { ref, defaultValue, isOpen, onClick } = useSelect(items);

  return (
    <Container ref={ref} onClick={onClick}>
      <span>{defaultValue}</span>
      {items.length > 0 && (
        <List
          items={items}
          style={{
            display: isOpen ? 'flex' : 'none',
            position: 'absolute',
            top: 44,
            right: 20,
            width: 108,
          }}
        />
      )}
      <ArrowBottom style={{ margin: '1px 0 0 8px' }} />
    </Container>
  );
};

export default Select;
