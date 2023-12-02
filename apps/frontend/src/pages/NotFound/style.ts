import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const TextArea = styled.div`
  text-align: center;

  p {
    margin: 32px 0 0;
    color: ${({ theme }) => theme.colors.light_gray90};
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
  }

  span {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.ligth_gray60};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
