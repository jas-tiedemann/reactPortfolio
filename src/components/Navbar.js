import React from "react";
import { 
    AppBar,
    Typography,
    Toolbar,
    Box,
    ButtonBase
  } from "@mui/material";

  const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{
            flexDirection: "row-reverse",
            backgroundColor: "black",
            padding: "0 2rem",
            height: "5rem"
        }}>
            <Toolbar>
                <ButtonBase id="btnWork" variant="text" sx={{
                    textDecoration: "none",
                    display: "inline-block",
                    textTransform: "none",
                    backgroundColor: "transparent",
                    margin: {xl: "2rem"},
                    width: {md: "7rem"} }}>
                <Typography variant="h4" sx={{
                    color: "white",
                    fontSize: {xs: "1.75rem", sm: "2rem", xl: "2.5rem"},
                    '&:hover': {
                        color: "#fb020a"
                    }}}>
                        Work
                </Typography>
              </ButtonBase>
              <ButtonBase id="btnAbout" variant="text" sx={{
                    textDecoration: "none",
                    display: "inline-block",
                    textTransform: "none",
                    backgroundColor: "transparent",
                    margin: {xl: "2rem"},
                    width: {md: "7rem"} }}>
                <Typography variant="h4" sx={{
                    color: "white",
                    fontSize: {xs: "1.75rem", sm: "2rem", xl: "2.5rem"},
                    '&:hover': {
                        color: "#fb020a"
                    }}}>
                          About
                </Typography>
              </ButtonBase>
              <ButtonBase id="btnResume" variant="text" sx={{
                    textDecoration: "none",
                    display: "inline-block",
                    textTransform: "none",
                    backgroundColor: "transparent",
                    margin: {xl: "2rem"},
                    width: {md: "7rem"} }}>
                <Typography variant="h4" sx={{
                    color: "white",
                    fontSize: {xs: "1.75rem", sm: "2rem", xl: "2.5rem"},
                    '&:hover': {
                        color: "#fb020a"
                    }}}>
                          Resume
                </Typography>
              </ButtonBase>
          </Toolbar>
        </AppBar>
  )};

  export default Navbar;