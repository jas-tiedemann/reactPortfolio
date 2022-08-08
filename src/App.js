import React from "react";
import { useState, useEffect } from "react";
import {
  Box
} from "@mui/material";
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import NavDesktop from './components/NavDesktop';
import NavMobile from './components/NavMobile';
import ImageBig from "./images/lighttower-img.png";
import ImageSmall from "./images/lighttower-small-img.png";



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


  useEffect(() => {
    const navBtnWorkDesk = document.getElementById("btnWorkDesk");
    const navBtnAboutDesk = document.getElementById("btnAboutDesk");
    const navBtnResumeDesk = document.getElementById("btnResumeDesk");

    const workComp = document.getElementById("wrapperProj");
    const aboutComp = document.getElementById("wrapperAbout");
    const resumeComp = document.getElementById("wrapperResume");

    
      navBtnWorkDesk.addEventListener("click", (e) => {
        workComp.scrollIntoView();
      });
    
      navBtnAboutDesk.addEventListener("click", (e) => {
        aboutComp.scrollIntoView()
      });

      navBtnResumeDesk.addEventListener("click", (e) => {
        resumeComp.scrollIntoView();
      });


      return () => {
        navBtnWorkDesk.removeEventListener("click", (e) => {
          workComp.scrollIntoView();
        });
        navBtnAboutDesk.removeEventListener("click", (e) => {
          aboutComp.scrollIntoView()
        });
        navBtnResumeDesk.removeEventListener("click", (e) => {
          resumeComp.scrollIntoView();
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
        {mobileView ? displayMobile() : displayDesktop()}
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