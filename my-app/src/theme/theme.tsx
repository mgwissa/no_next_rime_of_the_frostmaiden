import { autocompleteClasses } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#000',
    },
    secondary: {
      main: '#524E3B',
    },
  },
  typography: {
    fontFamily: 'Oldenburg',
    h1: {
      fontFamily: 'Oldenburg',
      textAlign: 'center',
    },
    body1: {
      color: '#000',
    },
  },
  components: {
    MuiCardMedia: {
        styleOverrides: {
          root: {
            margin: '0 auto',
          }
        }
    },
  },  
});

export default theme;