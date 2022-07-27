import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Home } from './pages/home';


function App() {
  return (
  <ThemeProvider theme={theme}>
   <Home/>
   </ThemeProvider>
  );
}

export default App;
