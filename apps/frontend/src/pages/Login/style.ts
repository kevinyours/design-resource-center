import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.colors.navy20};
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100%;
  margin: auto;
`;

export const Title = styled.h3`
  margin-top: 20px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

export const SubTitle = styled.span`
  margin-top: 24px;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.light_gray70};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 68px;
`;

export const LoginText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  :disabled {
    color: ${({ theme }) => theme.colors.ligth_gray40};
  }
`;

export const ResetPasswordLink = styled.a`
  margin-top: 28px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.light_gray70};
  cursor: pointer;
`;
