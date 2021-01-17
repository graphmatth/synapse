import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css-complete';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Inter', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
