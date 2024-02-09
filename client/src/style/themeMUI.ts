import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { color } from "./color";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: color.main,
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
