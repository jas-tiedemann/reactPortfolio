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
    margin: {xl: "2rem"},
    width: {md: "7rem"}
  });

  const NavDesktop = () => {
    return (
        <AppBar position="sticky" sx={{
            flexDirection: "row-reverse",
            backgroundColor: "black",
            padding: "0 2rem",
            height: "5rem"
        }}>
            <Toolbar>
                <NavBtnDesk id="btnWorkDesk" variant="text">
                    <Typography variant="h4">
                        Work
                    </Typography>
                </NavBtnDesk>
                <NavBtnDesk id="btnAboutDesk" variant="text">
                    <Typography variant="h4">
                        About
                    </Typography>
                </NavBtnDesk>
                <NavBtnDesk id="btnResumeDesk" variant="text" >
                    <Typography variant="h4">
                        Resume
                    </Typography>
                </NavBtnDesk>
            </Toolbar>
        </AppBar>
  )};

  

  export default NavDesktop;