import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      dark: "#081430",
      light: "#F5F5F5",
      blue: "#1E90FF",
    },
  });

  theme.typography.h2 = {
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.1rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '1.5rem',
    margin: "2rem 0",
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

  theme.typography.p = {
    fontSize: '1.25rem',
  };
  

  export default theme;