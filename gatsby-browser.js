import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './src/utils/Theme';
import GlobalStyle from './src/utils/GlobalStyle';

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={Theme}>
		<GlobalStyle />
		{element}
	</ThemeProvider>
);
