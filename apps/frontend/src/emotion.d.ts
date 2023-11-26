import '@emotion/react';
import type { theme } from './styles/theme';

type ThemeTpye = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeTpye {}
}
