import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';
import type { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default AppLayout;
