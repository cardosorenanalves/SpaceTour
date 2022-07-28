import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Home } from './pages/home';
import {GlobalStyles} from './global/styles/globalStyles'
import {BrowserRouter} from 'react-router-dom' 
import { AppRoutes } from './global/routes';


function App() {
  return (
    
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <AppRoutes/>
      </ThemeProvider>
    </BrowserRouter>
  
  );
}

export default App;
