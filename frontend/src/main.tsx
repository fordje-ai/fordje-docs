import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
)
