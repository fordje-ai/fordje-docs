import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      dark: '#5068E2',
      main: '#72A1E9',
      light: '#E8F6FB',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;