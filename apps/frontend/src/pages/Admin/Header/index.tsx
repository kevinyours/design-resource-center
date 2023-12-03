import { ReactComponent as Icon } from '@assets/icons/admin.svg';
import type { FC } from 'react';
import { Container, Title, TitleArea } from './style';

const Header: FC = () => {
  return (
    <Container>
      <TitleArea>
        <Icon style={{ width: 36, height: 36 }} />
        <Title>관리자&nbsp;페이지</Title>
      </TitleArea>
    </Container>
  );
};

export default Header;
