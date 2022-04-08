import { createTheme , ThemeProvider } from '@mui/material';
import React from 'react';
import { LoginForm } from './components/auth/login-form/login-form.component';
import "./index.css";

const darkTheme = createTheme({
  palette : {
    mode :"dark",
  },
});
function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <LoginForm/>
    </ThemeProvider>
    
  );
}

export default App;
