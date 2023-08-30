import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
	${emotionReset}

	*, *::after, *::before {
		box-sizing: border-box;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		font-smoothing: antialiased;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-style: normal;
		font-weight: 400;
		font-family:
			Pretendard,
			-apple-system,
			system-ui,
			sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
`;
