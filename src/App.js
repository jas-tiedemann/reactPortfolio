import React from "react";
import { 
  AppBar,
  Typography,
  Toolbar,
  Box,
  ButtonBase
} from "@mui/material";
import About from './components/About';
import ProjectList from './components/ProjectList';
import Image from "./images/lighttower-img.png";

const navBtnWork = document.getElementById("btnWork");
const navBtnAbout = document.getElementById("btnAbout");

const workComp = document.getElementById("wrapperProj");
const aboutComp = document.getElementById("wrapperAbout");

const navigateToComp = (comp) => {
  comp.scrollIntoView();
}

if (navBtnWork && workComp) {
  navBtnWork.addEventListener("click", function(event) {
    navigateToComp(workComp);
  });
}

if (navBtnAbout && aboutComp) {
  navBtnAbout.addEventListener("click", function(event) {
    navigateToComp(aboutComp);
  });
}

//green: #0d1517, red: #dd0910
const App = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      minHeight: "969px"
      
    }}>
      <AppBar position="sticky" sx={{
          flexDirection: "row-reverse",
          backgroundColor: "black",
          padding: "0 180px"
      }}>
        <Toolbar>
            <ButtonBase id="btnWork" variant="text" sx={{ textDecoration: "none", textTransform: "none", backgroundColor: "transparent", borderRadius: "5px", margin: "0 2rem", width: "7rem" }}>
                <Typography variant="h4" sx={{color: "white", margin: "0 2rem",'&:hover': {color: "#dd0910"}}}>Work</Typography>
            </ButtonBase>
            <ButtonBase id="btnAbout" variant="text" sx={{ textDecoration: "none", textTransform: "none", backgroundColor: "transparent", borderRadius: "5px", margin: "0 2rem", width: "7rem" }}>
                <Typography variant="h4" sx={{color: "white", margin: "0 2rem",'&:hover': {color: "#dd0910"}}}>About</Typography>
            </ButtonBase>
        </Toolbar>
      </AppBar>

        <Box id="wrapperProj">
          <ProjectList />
        </Box>

        <Box id="wrapperAbout"> 
          <About />
        </Box>
    </Box>
  );
}
export default App;