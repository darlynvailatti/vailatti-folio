import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Home } from './pages/Home';
import { useState } from 'react';
import './index.css';

function App() {

  const [darkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'Roboto',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
