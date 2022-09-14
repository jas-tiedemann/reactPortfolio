import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import Intro from './components/Intro';
import About from './components/About';
import ProjectList from './components/Work';
import Resume from './components/Resume';
import NavDesktop from './components/NavDesktop';
import NavMobile from './components/NavMobile';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        {mobileView ? displayMobile() : displayDesktop()}
        
        <main>
          <Intro />
          <About />
          <ProjectList />
          <Resume />
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </body>
  );
}
export default App;