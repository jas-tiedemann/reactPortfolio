import React from "react";
import { 
    Box,
    Typography
  } from "@mui/material";
import sample from "../images/sample.mp4";

  const Intro = () => {
    return (
        <Box id="wrapperIntro" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: "100vh",
            bgcolor: "dark",
            color: "beige",
            position: "relative",
        }}>
            <Typography variant="h1" sx={{
                paddingBottom: "10rem"
            }}>
                Welcome to Jasper's portfolio page!
            </Typography>
            <Typography variant="p">
                With this website I want to introduce myself, show some of my skills and tell you about me.
            </Typography>
            <Typography variant="p">
                If you want to get in touch, find the contact section on the bottom.
            </Typography>
        </Box>
    )};

  export default Intro;