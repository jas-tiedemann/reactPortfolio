import React from "react";
import { Typography, Container } from "@mui/material";

const About = () => {
    return (
        <Container sx={{
            width: "45rem"
            }}>
            <Typography variant="h1" sx={{
                display: "flex",
                justifyContent: "center",
                padding: "3rem"
            }}>
                About Me
            </Typography>
            <Typography variant="p" sx={{
                fontSize: "2rem"
            }}>
                My Name is </Typography><Typography variant="p" sx={{fontSize: "2rem", color: "#dd0910"}}>Jasper Tiedemann </Typography><Typography variant="p" sx={{
                fontSize: "2rem"}}>
                and I'm a web developer based in Germany with
                over </Typography><Typography variant="p" sx={{fontSize: "2rem", color: "#dd0910"}}>2 years of experience. </Typography><Typography variant="p" sx={{
                fontSize: "2rem"}}>
                Over the last couple of months I taught myself </Typography><Typography variant="p" sx={{fontSize: "2rem", color: "#dd0910"}}>Javascript, React.js and Material-UI </Typography><Typography variant="p" sx={{
                fontSize: "2rem"}}>
                with which I created a Hangman web application and this website.
                Prior to that I mostly did PHP backend development. Additionally I know how
                to use </Typography><Typography variant="p" sx={{fontSize: "2rem", color: "#dd0910"}}>HTML, CSS, MySQL and Git </Typography><Typography variant="p" sx={{
                fontSize: "2rem"}}> for version control.
            </Typography>
        </Container>
        )
}

export default About;