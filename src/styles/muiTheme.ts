import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#2c00a7",
      light: "##a180ff",
      dark: "#14004d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E0E0E0",
      light: "#E6E6E6",
      dark: "#9C9C9C",
      contrastText: "#505C6E",
    },
    text: {
      primary: "#2c00a7",
      secondary: "#505C6E",
    },
  },
});
