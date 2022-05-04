import React from "react";
import { Typography, Container } from "@mui/material";

const About = () => {
    return (
        <Container maxWidth="false" sx={{
            bgcolor: "white",
            height: "35rem"
            }}>
            <Typography variant="h1" align="center" sx={{
                padding: "3rem 0"
            }}>
                About Me
            </Typography>
            <Container maxWidth="false" sx={{
                padding: "2rem",
                width: "75rem"
            }}>
                <Typography variant="p" sx={{
                    fontSize: "2rem"
                }}>
                    My name is Jasper Tiedemann and I'm a web developer based in Germany with over 2 years of experience. 
                    Most recently I taught myself React.js and Material-UI with which I created a Hangman web application and this website.
                    Prior to that I mostly did PHP backend development. 
                    Additionally I know how to use HTML, CSS, MySQL and Git for version control.
                </Typography>
            </Container>
        </Container>
        )
}

export default About;