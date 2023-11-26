import styled from '@emotion/styled';
import type { Colors } from '@styles/colors';

export const Container = styled.button<{ backgroundColor?: typeof Colors }>`
  width: 100%;
  min-height: 34px;
  box-sizing: border-box;
  padding: 20px 8px;
  border-radius: 4px;
  border: solid 2px transparent;
  outline: none;
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.blue100};
  cursor: pointer;

  :active {
    opacity: 0.8;
    border: solid 2px #8fbcff;
  }

  :hover {
    border: solid 2px #8fbcff;
  }

  :disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.light_gray30};
    color: ${({ theme }) => theme.colors.ligth_gray40};
  }
`;
