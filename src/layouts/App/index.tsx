import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@styles/global';
import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={{}}>
				<Global styles={GlobalStyle} />
				<BrowserRouter>{children}</BrowserRouter>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default AppLayout;
