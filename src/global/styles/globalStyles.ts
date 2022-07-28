import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyles = createGlobalStyle`
   * {

    margin: 0;
    padding: 0;
    outline: 0;
    
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
 
export default GlobalStyles;