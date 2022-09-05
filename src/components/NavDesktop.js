import React from "react";
import { 
    AppBar,
    Typography,
    Toolbar,
    Button
  } from "@mui/material";
  import { styled } from '@mui/system';

  const NavBtnDesk = styled(Button, {})({
    color: "white",
    textDecoration: "none",
    borderRadius: "2",
    display: "inline-block",
    textTransform: "none",
    backgroundColor: "transparent",
    margin: "2rem",
    width: "fit-content"
  }); 

  const NavDesktop = () => {
    return (
        <AppBar position="fixed" sx={{
            flexDirection: "row-reverse",
            backgroundColor: "black",
            padding: "0 2rem",
            height: "5rem"
        }}>
            <Toolbar>
                <NavBtnDesk id="btnWorkDesk" variant="text" onClick={() => document.getElementById("wrapperProject").scrollIntoView({block: "start"})}>
                    <Typography variant="p">
                        Work
                    </Typography>
                </NavBtnDesk>
                <NavBtnDesk id="btnAboutDesk" variant="text" onClick={() => document.getElementById("wrapperAbout").scrollIntoView({block: "start"})}>
                    <Typography variant="p">
                        About
                    </Typography>
                </NavBtnDesk>
                <NavBtnDesk id="btnResumeDesk" variant="text" onClick={() => document.getElementById("wrapperResume").scrollIntoView({block: "start"})}>
                    <Typography variant="p">
                        Resume
                    </Typography>
                </NavBtnDesk>
                <NavBtnDesk id="btnContactDesk" variant="text" onClick={() => document.getElementById("wrapperContact").scrollIntoView({block: "start"})}>
                    <Typography variant="p">
                        Contact
                    </Typography>
                </NavBtnDesk>
            </Toolbar>
        </AppBar>
  )};

  export default NavDesktop;