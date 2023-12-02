import { ReactComponent as ArrowBottom } from '@assets/directions/arrow_bottom.svg';
import List from '@components/List';
import type { ItemProps } from '@interfaces/shared';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { type FC } from 'react';
import { useDropdown } from './hooks';
import { Container } from './style';

interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  items?: Array<ItemProps>;
  listSize?: number;
}

const Dropdown: FC<DropdownProps> = ({
  name,
  items = [],
  listSize,
  ...rest
}) => {
  const { ref, isOpen, onClick } = useDropdown();

  return (
    <Container {...rest} ref={ref} onClick={onClick}>
      <span>{name}</span>
      {items.length > 0 && (
        <List
          items={items}
          style={{
            display: isOpen ? 'flex' : 'none',
            position: 'absolute',
            top: 44,
            left: '-1px',
            width: listSize,
          }}
        />
      )}
      <ArrowBottom style={{ marginLeft: 'auto' }} />
    </Container>
  );
};

export default Dropdown;
