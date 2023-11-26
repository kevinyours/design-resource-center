import { ReactComponent as Vision } from '@assets/logos/vision.svg';
import PrimatyButton from '@components/PrimaryButton';
import TextField from '@components/TextField';
import { PAGES } from '@constants/route';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Content,
  Left,
  LoginForm,
  LoginText,
  ResetPasswordLink,
  Right,
  SubTitle,
  Title,
} from './style';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PAGES.MAIN.HOME);
  };

  return (
    <Container>
      <Left></Left>
      <Right>
        <Content>
          <Vision />
          <Title>자인원&nbsp;그래픽의&nbsp;모든&nbsp;것</Title>
          <SubTitle>
            서비스&nbsp;이용을&nbsp;위해&nbsp;로그인&nbsp;해주세요.
          </SubTitle>
          <LoginForm method='POST'>
            <TextField placeholder='아이디' type='text' />
            <TextField placeholder='비밀번호' type='password' />
            <PrimatyButton onClick={onClick} type='submit'>
              <LoginText>로그인</LoginText>
            </PrimatyButton>
          </LoginForm>
          <ResetPasswordLink>비밀번호를&nbsp;모르신다면?</ResetPasswordLink>
        </Content>
      </Right>
    </Container>
  );
};

export default LoginPage;
