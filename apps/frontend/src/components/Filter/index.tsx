import Checkbox from '@components/Checkbox';
import type { FC, ReactNode } from 'react';
import { Container } from './style';

export interface FilterProps {
  icon: ReactNode;
  name: string;
  isChecked?: boolean;
  onClick?: (name: string, isChecked: boolean) => void;
}

const Filter: FC<FilterProps> = ({
  icon,
  name,
  isChecked = false,
  onClick,
}) => {
  return (
    <Container>
      {icon}
      <span>{name}</span>
      <Checkbox
        id={name}
        isActive={isChecked}
        onClick={({ id, isActive }) => onClick?.(id, isActive)}
        style={{ marginLeft: 'auto' }}
      />
    </Container>
  );
};

export default Filter;
