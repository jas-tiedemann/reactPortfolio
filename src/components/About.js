import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Box>
            <Box sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant="h1" sx={{
                    padding: {xs: "1.5rem 0"},
                    fontSize: {xs: "2rem", sm: "3rem", md: "3.5rem"}
                }}>
                    About Me
                </Typography>
            </Box>
            <Box sx={{
                maxWidth: "40rem",
                display: "flex",
                justifyContent: "center",
                margin: "auto"
            }}>
                <Typography variant="p" sx={{
                    fontSize: "2rem"
                }}>
                    <p>Personal: My name is Jasper Tiedemann and I'm a web developer based in Germany with over three years of experience.</p>
                    <p>Skills: Most recently I taught myself React.js and Material-UI with which I created a Hangman web application and this website. Prior to that I mostly did PHP backend development. Additionally I know how to use HTML, CSS, MySQL and Git for version control.</p>
                    <p>Hobbies: My favorite things to do in my free time are running, working out, cooking and playing video games.</p>
                </Typography>
            </Box>
        </Box>
        )
}

export default About;