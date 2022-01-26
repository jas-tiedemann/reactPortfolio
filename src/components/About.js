import React from "react";
import { Typography, Container } from "@mui/material";

const About = () => {
    return (
        <Container>
            <Typography variant="h1" sx={{
                display: "flex",
                justifyContent: "center",
                padding: "3rem"
            }}>
                About Me
            </Typography>
            <Typography variant="h3" sx={{
                paddingBottom: "3rem"
            }}>
                Nice to meet you!
            </Typography>
            <Typography variant="p" sx={{
                fontSize: "2rem",
                width: "50%"
            }}>
                My Name is Jasper Tiedemann and I'm a web developer based in Germany with
                over 2 years of experience.
                Over the last couple of months I taught myself Javascript, React.js and Material-UI
                with which I created a Hangman web application and this website.
                Prior to that I mostly did PHP backend development. Additionally I know how
                to use HTML, CSS, MySQL and Git for version control.
            </Typography>
        </Container>
        )
}

export default About;