import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      dark: "#081430",
      light: "#F5F5F5",
      beige: "#FACF69",
    },
    components: {
      MuiListItem: {
        styleOverrides: {
          root: {
            fontSize: "1.25rem",
            padding: 0,
          }
      }}
    }
  });

  theme.typography.h1 = {
    fontSize: "3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3.7rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "2.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3.1rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.5rem",
    margin: "0",
    marginTop: "3rem",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };

  theme.typography.h4 = {
    fontSize: "1.4rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

  theme.typography.p = {
    fontSize: "1.25rem",
  };

  theme.typography.listItem = {
    fontSize: "1.25rem",
  };

  export default theme;