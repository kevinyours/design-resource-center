import styled from '@emotion/styled';

export const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 83px;
  height: 36px;
  box-sizing: border-box;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  :focus-within {
    border: 1px solid #8fbcff;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
  }
`;
