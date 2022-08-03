import React from "react";
import { useState, useEffect } from "react";
import {
  Box
} from "@mui/material";
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import NavDesktop from './components/NavDesktop';
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
      <Box id="wrapperNav" sx={{
        display: "flex",
        justifyContent: "center",
        width: "device-width",
        margin: 0,
        padding: 0,
        position: "sticky",
        top: 0
      }}>
        <NavDesktop />
      </Box>

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