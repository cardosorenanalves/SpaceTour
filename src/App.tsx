import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Home } from './pages/home';
import {GlobalStyles} from './global/styles/globalStyles'


function App() {
  return (
  <ThemeProvider theme={theme}>
   <Home/>
   <GlobalStyles/>
   </ThemeProvider>
  );
}

export default App;
