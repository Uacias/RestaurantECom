import { createTheme } from "@mui/material";

export const colors = {
  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
  },
  green: {
    100: "#cce6cc",
    200: "#99cc99",
    300: "#66b366",
    400: "#339933",
    500: "#008000",
    600: "#006600",
    700: "#004d00",
    800: "#003300",
    900: "#001a00",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.black[200],
    },
    secondary: {
      main: colors.green[300],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 11,
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 20,
    },
  },
});
