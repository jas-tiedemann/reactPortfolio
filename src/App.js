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
import Contact from './components/Contact';
import ImageShore from "./images/shore-img.jpg";
import ImageForest from "./images/forest-img.jpg";



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

      <Box id="wrapperProject" sx={{
        backgroundImage: `url(${ImageForest})`,
        backgroundSize: "cover",
        backgroundPosition: {xs: "50%", md: "top"},
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

      <Box id="wrapperAbout" sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "2rem",
        marginBottom: "3rem",
        minHeight: "50rem"
      }}> 
        <About />
      </Box>

      <Box id="wrapperResume" sx={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        bgcolor: "black"
      }}> 
        <Resume />
      </Box>

      <Box id="wrapperContact" sx={{
        backgroundImage: `url(${ImageShore})`,
        backgroundSize: "cover",
        backgroundPosition: {xs: "50%", md: "75%"},
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
      }}> 
        <Contact />
      </Box>
    </Box>
  );
}
export default App;