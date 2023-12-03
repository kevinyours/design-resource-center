import styled from '@emotion/styled';
import type { Colors } from '@styles/colors';
import { ButtonThemes, type ButtonThemeTypes } from './theme';

export const Container = styled.button<{
  backgroundColor?: typeof Colors;
  buttonTheme: ButtonThemeTypes;
}>`
  width: max-content;
  min-height: 34px;
  box-sizing: border-box;
  padding: 8px 14px;
  border-radius: 4px;
  border: solid 2px transparent;
  outline: none;
  cursor: pointer;

  ${({ buttonTheme }) => ButtonThemes[buttonTheme]}

  :disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.light_gray30};
    color: ${({ theme }) => theme.colors.ligth_gray40};
  }
`;
