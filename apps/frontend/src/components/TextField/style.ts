import styled from '@emotion/styled';

export const Container = styled.input`
  height: 60px;
  box-sizing: border-box;
  padding: 22px 24px;
  border-radius: 4px;
  border: solid 2px transparent;
  background: ${({ theme }) => theme.colors.light_gray30};

  ::placeholder {
    color: ${({ theme }) => theme.colors.light_gray70};
  }

  :active {
    opacity: 0.8;
    border: solid 2px #8fbcff;
  }

  :hover {
    border: solid 2px #8fbcff;
  }

  :disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.ligth_gray40};
    color: ${({ theme }) => theme.colors.ligth_gray40};
  }
`;
