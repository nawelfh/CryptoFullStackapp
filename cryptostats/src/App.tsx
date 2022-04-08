import { createTheme , ThemeProvider } from '@mui/material';
import React from 'react';
import "./index.css";
import { Routes } from './routes/routes';

const darkTheme = createTheme({
  palette : {
    mode :"dark",
  },
});
function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Routes/>
      
    </ThemeProvider>
    
  );
}

export default App;
