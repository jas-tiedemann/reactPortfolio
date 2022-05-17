import React from "react";
import { Typography, Container } from "@mui/material";

const About = () => {
    return (
        <Container maxWidth="false" sx={{
            bgcolor: "white",
            height: "35rem"
            }}>
            <Typography variant="h1" align="center" sx={{
                paddingTop: "5rem"
            }}>
                About Me
            </Typography>
            <Container maxWidth="false" sx={{
                padding: "6rem",
                width: "45rem"
            }}>
                <Typography variant="p" sx={{
                    fontSize: "2rem"
                }}>
                    Personal: My name is Jasper Tiedemann and I'm a web developer based in Germany with over 2 years of experience.
                    <br></br>
                    <br></br>
                    Skills: Most recently I taught myself React.js and Material-UI with which I created a Hangman web application and this website.
                    Prior to that I mostly did PHP backend development. 
                    Additionally I know how to use HTML, CSS, MySQL and Git for version control.
                    <br></br>
                    <br></br>
                    Hobbies: My favorite things to do in my free time are running, working out, cooking and playing video games.
                </Typography>
            </Container>
        </Container>
        )
}

export default About;