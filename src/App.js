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


  return (
    <Box>
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

      <Box id="wrapperProj" sx={{
        backgroundImage: {xs: `url(${ImageSmall})`, md: `url(${ImageBig})`},
        backgroundSize: "cover",
        backgroundPosition: {xs: "50% 75%", md: "top"},
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
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
        justifyContent: "center",
        bgcolor: "black"
      }}> 
        <Resume />
      </Box>
    </Box>
  );
}
export default App;