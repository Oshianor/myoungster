import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#028cd6"
    },
    secondary: {
      main: "#000000"
    },
    intermediate: {
      main: "#fd385b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#f9f9f9"
    }
  }
});

export default theme;
