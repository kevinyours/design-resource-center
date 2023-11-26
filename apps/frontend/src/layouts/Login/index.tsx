import { Outlet } from 'react-router-dom';
import { Container } from './style';

const AuthenticatedLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthenticatedLayout;
