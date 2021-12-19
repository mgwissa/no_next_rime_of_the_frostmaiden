import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#524e3b',
    },
  },
  typography: {
    fontFamily: 'Oldenburg'
  },
});

export default theme;