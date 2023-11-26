import { ReactComponent as ArrowRight } from '@assets/directions/arrow_right.svg';
import { FC } from 'react';
import { Container, NavLink } from './style';

const Nav: FC = () => {
  return (
    <Container>
      <NavLink>메인</NavLink>
      <ArrowRight style={{ width: 20, height: 20 }} />
      <NavLink>스리디</NavLink>
      <ArrowRight style={{ width: 20, height: 20 }} />
      <NavLink isActive={true}>조한정</NavLink>
    </Container>
  );
};

export default Nav;
