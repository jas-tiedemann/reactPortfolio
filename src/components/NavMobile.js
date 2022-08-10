import React from "react";
import { 
    AppBar,
    Toolbar,
    Drawer,
    Typography,
    Button
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import IconButton from '@mui/material/IconButton';
  import { styled } from '@mui/system';
  import { useState } from "react";

  
  const NavBtnMob = styled(Button, {})({
    color: "black",
    textDecoration: "none",
    borderRadius: "2",
    display: "inline-block",
    textTransform: "none",
    backgroundColor: "transparent",
    margin: {xl: "2rem"},
    width: {md: "7rem"}
  });

  const NavMobile = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    
    const workComp = document.getElementById("wrapperProj");
    const aboutComp = document.getElementById("wrapperAbout");
    const resumeComp = document.getElementById("wrapperResume");


    return (        
        <AppBar position="sticky" sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            padding: "0 2rem",
            height: "5rem"
        }}>
            <Toolbar>
                <IconButton onClick={() => setDrawerOpen(true)}>
                    <MenuIcon sx={{
                        fontSize: "3rem",
                        color: "white"
                    }} />
                </IconButton>
                
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <NavBtnMob id="btnWorkMob" variant="text" onClick={() => workComp.scrollIntoView()}>
                        <Typography variant="h4">
                            Work
                        </Typography>
                    </NavBtnMob>
                    <NavBtnMob id="btnAboutMob" variant="text" onClick={() => aboutComp.scrollIntoView()}>
                        <Typography variant="h4">
                            About
                        </Typography>
                    </NavBtnMob>
                    <NavBtnMob id="btnResumeMob" variant="text" onClick={() => resumeComp.scrollIntoView()} >
                        <Typography variant="h4">
                            Resume
                        </Typography>
                    </NavBtnMob>
                </Drawer>
            </Toolbar>
        </AppBar>
  )};

  

  export default NavMobile;