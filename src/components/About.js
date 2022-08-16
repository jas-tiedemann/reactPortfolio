import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Box sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "70rem"
            }}>
            <Box sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant="h1" sx={{
                    paddingTop: "5rem",
                    fontSize: {xs: "4rem", md: "6rem"}
                }}>
                    About Me
                </Typography>
            </Box>
            <Box sx={{
                padding: "4rem",
                maxWidth: "40rem",
                display: "flex",
                justifyContent: "center",
                margin: "auto"
            }}>
                <Typography variant="p" sx={{
                    fontSize: "2rem"
                }}>
                    Personal: My name is Jasper Tiedemann and I'm a web developer based in Germany with over three years of experience.
                    <br></br>
                    <br></br>
                    Skills: Most recently I taught myself React.js and Material-UI with which I created a Hangman web application and this website.
                    Prior to that I mostly did PHP backend development. 
                    Additionally I know how to use HTML, CSS, MySQL and Git for version control.
                    <br></br>
                    <br></br>
                    Hobbies: My favorite things to do in my free time are running, working out, cooking and playing video games.
                </Typography>
            </Box>
        </Box>
        )
}

export default About;