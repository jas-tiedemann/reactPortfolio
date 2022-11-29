import React from "react";
import { 
    AppBar,
    Toolbar,
    Drawer
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import IconButton from '@mui/material/IconButton';
  import { styled } from '@mui/system';
  import { useState } from "react";

  
  const NavAnchorMob = styled("a")(({theme}) => ({
    color: theme.palette.light,
    fontSize: "2rem",
    textDecoration: "none",
    margin: "0.5rem auto",
    padding: "0 1rem"
  }));

  const NavMobile = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (        
        <AppBar position="fixed" sx={{
            backgroundColor: "dark",
            display: "flex",
            justifyContent: "center",
            padding: "0 2rem",
            margin: 0,
            height: "5rem",
            position: "fixed",
            top: 0
        }}>
            <Toolbar>
                <IconButton onClick={() => setDrawerOpen(true)}>
                    <MenuIcon sx={{
                        fontSize: "3rem",
                        color: "white"
                    }} />
                </IconButton>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{
                    sx:{
                        bgcolor: "dark",
                        "& .btnMob": {
                            color: "light",
                            fontSize: "1.25rem",
                            padding: "1rem",
                            margin: "0 2rem",
                            textAlign: "center"
                        }
                    }
                }}>
                    <NavAnchorMob className="btnMob" id="btnIntroMob" href="#intro" onClick={() => document.getElementById("wrapperIntro").scrollIntoView({block: "start"})}>
                        Intro
                    </NavAnchorMob>
                    <NavAnchorMob className="btnMob" id="btnAboutMob" href="#about" onClick={() => document.getElementById("wrapperAbout").scrollIntoView({block: "start"})}>
                        About
                    </NavAnchorMob>
                    <NavAnchorMob className="btnMob" id="btnWorkMob" href="#work" onClick={() => document.getElementById("wrapperWork").scrollIntoView({block: "start"})}>
                        Work
                    </NavAnchorMob>
                    <NavAnchorMob className="btnMob" id="btnResumeMob" href="#resume" onClick={() => document.getElementById("wrapperResume").scrollIntoView({block: "start"})}>
                        Resume
                    </NavAnchorMob>
                    <NavAnchorMob className="btnMob" id="btnContactMob" href="#contact" onClick={() => document.getElementById("wrapperContact").scrollIntoView({block: "start"})}>
                        Contact
                    </NavAnchorMob>
                </Drawer>
            </Toolbar>
        </AppBar>
  )};

  

  export default NavMobile;