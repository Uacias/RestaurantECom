import { createTheme } from "@mui/material";
export const colors = {
  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },

  gray: {
    100: "#eff7fa",
    200: "#deeff5",
    300: "#cee8f0",
    400: "#bde0eb",
    500: "#add8e6",
    600: "#8aadb8",
    700: "#68828a",
    800: "#45565c",
    900: "#232b2e",
  },

  yellow: {
    100: "#ffffcc",
    200: "#ffff99",
    300: "#ffff66",
    400: "#ffff33",
    500: "#ffff00",
    600: "#cccc00",
    700: "#999900",
    800: "#666600",
    900: "#333300",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.black[300],
    },
    secondary: {
      main: colors.gray[300],
    },
  },
  typography: {
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
