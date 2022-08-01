import React from "react";
import { useState, useEffect } from "react";
import { 
  AppBar,
  Typography,
  Toolbar,
  Box,
  ButtonBase
} from "@mui/material";
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import ImageBig from "./images/lighttower-img.png";
import ImageSmall from "./images/lighttower-small-img.png";



const App = () => {
  const [state, setState] = useState ({
    mobileView: false
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return 
        if (window.innerWidth < 900) {
          setState((prevState) => ({...prevState, mobileView: true }));
          console.log("below 900")
        } else {
          setState((prevState) => ({...prevState, mobileView: false }));
          console.log("above 900")
        }}

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
    }
    }, []);

  useEffect(() => {
    const navBtnWork = document.getElementById("btnWork");
    const navBtnAbout = document.getElementById("btnAbout");
    const navBtnResume = document.getElementById("btnResume");

    const projComp = document.getElementById("wrapperProj");
    const aboutComp = document.getElementById("wrapperAbout");
    const resumeComp = document.getElementById("wrapperResume");

    const navigateToComp = (comp) => {
      comp.scrollIntoView();
    }

      navBtnWork.addEventListener("click", (event) => {
        navigateToComp(projComp);
      });
    
      navBtnAbout.addEventListener("click", (event) => {
        navigateToComp(aboutComp);
      });

      navBtnResume.addEventListener("click", (event) => {
        navigateToComp(resumeComp);
      });

      return () => {
        navBtnWork.removeEventListener("click", (event) => {
          navigateToComp(projComp);
        });
        navBtnAbout.removeEventListener("click", (event) => {
          navigateToComp(aboutComp);
        });
        navBtnResume.addEventListener("click", (event) => {
          navigateToComp(resumeComp);
        });
      }
  }, []);

  

  return (
    <Box sx={{
      backgroundImage: {xs: `url(${ImageSmall})`, md: `url(${ImageBig})`},
      backgroundSize: {xs: "cover", md: "cover"},
      backgroundPosition: {xs: "50% 75%", md: "top"},
      backgroundRepeat: "no-repeat",
      height: "100%"
      
    }}>
      <AppBar position="sticky" sx={{
          flexDirection: "row-reverse",
          backgroundColor: "black",
          padding: "0 2rem",
          height: "5rem"
      }}>
        <Toolbar>
            <ButtonBase id="btnWork" variant="text" sx={{
              textDecoration: "none",
              display: "inline-block",
              textTransform: "none",
              backgroundColor: "transparent",
              margin: {xl: "2rem"},
              width: {md: "7rem"} }}>
              <Typography variant="h4" sx={{
                color: "white",
                fontSize: {xs: "1.75rem", sm: "2rem", xl: "2.5rem"},
                '&:hover': {
                  color: "#fb020a"
                  }}}>
                    Work
              </Typography>
            </ButtonBase>
            <ButtonBase id="btnAbout" variant="text" sx={{
              textDecoration: "none",
              display: "inline-block",
              textTransform: "none",
              backgroundColor: "transparent",
              margin: {xl: "2rem"},
              width: {md: "7rem"} }}>
              <Typography variant="h4" sx={{
                    color: "white",
                    fontSize: {xs: "1.75rem", sm: "2rem", xl: "2.5rem"},
                    '&:hover': {
                      color: "#fb020a"
                      }}}>
                        About
              </Typography>
            </ButtonBase>
            <ButtonBase id="btnResume" variant="text" sx={{
              textDecoration: "none",
              display: "inline-block",
              textTransform: "none",
              backgroundColor: "transparent",
              margin: {xl: "2rem"},
              width: {md: "7rem"} }}>
              <Typography variant="h4" sx={{
                    color: "white",
                    fontSize: {xs: "1.75rem", sm: "2rem", xl: "2.5rem"},
                    '&:hover': {
                      color: "#fb020a"
                      }}}>
                        Resume
              </Typography>
            </ButtonBase>
        </Toolbar>
      </AppBar>

        <Box id="wrapperProj" sx={{
          display: "flex",
          justifyContent: "center",
          width: "device-width",
          margin: 0,
          padding: 0
        }}>
          <ProjectList />
        </Box>

        <Box id="wrapperAbout"> 
          <About />
        </Box>

        <Box id="wrapperResume" sx={{
          display: "flex",
          justifyContent: "center"
        }}> 
          <Resume />
        </Box>
    </Box>
  );
}
export default App;