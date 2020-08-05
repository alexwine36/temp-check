import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const themeTypes = createMuiTheme({
  palette: {
    primary: {
      main: "#861c32",
    },
    secondary: {
      main: "#c68c5d",
    },
  },
});

export const theme = responsiveFontSizes(themeTypes);
