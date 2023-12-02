import styled from '@emotion/styled';

export const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.ligth_gray40};
  background: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ disabled, theme }) =>
    disabled &&
    `
    border: 1px solid ${theme.colors.ligth_gray40};
    background: ${theme.colors.light_gray30};
    color: ${theme.colors.ligth_gray40};
  `}

  :focus-within {
    border: 1px solid #8fbcff;
  }

  :hover {
    border: 1px solid
      ${({ theme, disabled }) => !disabled && theme.colors.navy100};
  }
`;
