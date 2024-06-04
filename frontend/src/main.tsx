import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <CssBaseline />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
)
