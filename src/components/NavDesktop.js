import React from "react";
import { 
    AppBar,
    Toolbar
  } from "@mui/material";
  import { styled } from '@mui/system';

  const NavAnchorDesk = styled("a")(({theme}) => ({
    color: theme.palette.light,
    fontSize: "1.5rem",
    textDecoration: "none",
    margin: "2rem",
    ":hover": {
        color: theme.palette.beige
    }
  })); 

  const NavDesktop = () => {
    return (
        <AppBar position="fixed" sx={{
            flexDirection: "row-reverse",
            backgroundColor: "dark",
            padding: "0 2rem",
            height: "5rem"
        }}>
            <Toolbar>
                <NavAnchorDesk id="btnIntroDesk" href="#intro" onClick={() => document.getElementById("wrapperIntro").scrollIntoView({block: "start"})}>
                    Intro
                </NavAnchorDesk>
                <NavAnchorDesk id="btnAboutDesk" href="#about" onClick={() => document.getElementById("wrapperAbout").scrollIntoView({block: "start"})}>
                    About
                </NavAnchorDesk>
                <NavAnchorDesk id="btnWorkDesk" href="#work" onClick={() => document.getElementById("wrapperWork").scrollIntoView({block: "start"})}>
                    Work
                </NavAnchorDesk>
                <NavAnchorDesk id="btnResumeDesk" href="#resume" onClick={() => document.getElementById("wrapperResume").scrollIntoView({block: "start"})}>
                    Resume
                </NavAnchorDesk>
                <NavAnchorDesk id="btnContactDesk" href="#contact" onClick={() => document.getElementById("wrapperContact").scrollIntoView({block: "start"})}>
                    Contact
                </NavAnchorDesk>
            </Toolbar>
        </AppBar>
  )};

  export default NavDesktop;