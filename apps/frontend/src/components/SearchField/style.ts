import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.ligth_gray40};
  background: ${({ theme }) => theme.colors.white};

  :active {
    border: 1px solid ${({ theme }) => theme.colors.navy100};
  }

  :focus {
    border: 1px solid #8fbcff;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.navy100};
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.ligth_gray40};
    color: ${({ theme }) => theme.colors.ligth_gray40};
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  outline: none;
  background: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.ligth_gray60};
  }
`;
