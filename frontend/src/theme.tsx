import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(50,50,50)',
    },
    secondary: {
      main: '#556B2F',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;