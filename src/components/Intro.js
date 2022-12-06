import React from "react";
import { 
    Box,
    Typography
  } from "@mui/material";

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
            padding: "2rem"
        }}>
            <Typography variant="h1" sx={{
                padding: "10rem 0"
            }}>
                Welcome to Jasper's portfolio page!
            </Typography>
            <Typography variant="p">
                With this website I want to introduce myself, show some of my skills and tell you about me.
            </Typography>
            <Typography variant="p">
                If you want to get in touch, find the contact section on the bottom or give me a call!
            </Typography>
            <Typography variant="h3">
                +49 157 5865662
            </Typography>
        </Box>
    )};

  export default Intro;