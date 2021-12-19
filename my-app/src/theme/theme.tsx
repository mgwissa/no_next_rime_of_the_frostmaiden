import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#524E3B',
    },
  },
  typography: {
    fontFamily: 'Oldenburg',
    h1: {
      fontFamily: 'Oldenburg',
    },
  },
});

export default theme;