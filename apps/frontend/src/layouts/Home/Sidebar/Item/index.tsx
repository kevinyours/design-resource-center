import type { FC, ReactNode } from 'react';
import { Container } from './style';

interface NavItemProps {
  icon: ReactNode;
  name: string;
  totalCount?: number;
}

const NavItem: FC<NavItemProps> = ({ icon, name, totalCount }) => {
  return (
    <Container>
      {icon}
      <span>{name}</span>
      <span>{totalCount}</span>
    </Container>
  );
};

export default NavItem;
