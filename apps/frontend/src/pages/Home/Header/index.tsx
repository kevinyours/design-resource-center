import { ReactComponent as Icon } from '@assets/sidebar/icon.svg';
import { Container, Title } from './style';

const Header = () => {
  return (
    <Container>
      <Icon style={{ width: 36, height: 36 }} />
      <Title>아이콘</Title>
    </Container>
  );
};

export default Header;
