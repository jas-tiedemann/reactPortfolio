import React from "react";
import { useState, useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import NavDesktop from './components/NavDesktop';
import NavMobile from './components/NavMobile';
import Contact from './components/Contact';

const App = () => {

  const [mobileView, setMobileView] = useState(false);

  const displayMobile = () => {
    return (
      <NavMobile />
    );
  }

  const displayDesktop = () => {
    return (
      <NavDesktop />
    );
  }

  
  useEffect(() => {
    const setResponsiveness = (e) => {
        window.innerWidth < 900 ?
          setMobileView(true) : 
          setMobileView(false)
        }
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
    }
    }, []);


  return (
    <body>
      <ThemeProvider theme={theme}>
        <header>
          <Box id="wrapperNav" sx={{
            display: "flex",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            position: "sticky",
            top: 0
          }}>
            {mobileView ? displayMobile() : displayDesktop()}
          </Box>
        </header>

        <main>
          <About />
          <ProjectList />
          <Resume />
          <Contact />
        </main>

        <footer>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </footer>
      </ThemeProvider>
    </body>
  );
}
export default App;