import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AllRoutes from './SharedComponents/AllRoutes';
import { CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});


function App() {
  const [mode, setMode] = useState('light');
    const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
    const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
            <BrowserRouter>
              <CssBaseline/>
                <ThemeProvider theme={darkModeTheme}>
                    <Button onClick={() => toggleMode()} style={{position: 'fixed', top: '0px', right: '0px', background: '#121212', padding: '5px 15px'}}>
                      {mode === 'dark' ? 'Dark' : 'Light'} Mode
                    <Switch defaultChecked />
                    </Button>
                 </ThemeProvider>
                <AllRoutes mode={mode} />
            </BrowserRouter>
  );
}

export default App;
