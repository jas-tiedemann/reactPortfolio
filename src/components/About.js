import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Box id="wrapperAbout" sx={{
            margin: "auto",
            bgcolor: "light"
        }}> 
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "50rem",
                width: "90%",
                maxWidth: "40rem",
                margin: "auto",
                overflow: "hidden"
            }}>
                <Box sx={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="h2" sx={{
                        padding: {xs: "0.75rem 0", sm: "1.5rem 0"},
                        color: "dark"
                    }}>
                        About Me
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "2rem auto",
                    color: "dark"
                }}>
                    <Typography variant="h3">Personal:</Typography>
                    <Typography variant="p">My name is Jasper Tiedemann and I'm a web developer based in Germany with over three years of experience.</Typography>
                    <Typography variant="h3">Skills:</Typography>
                    <Typography variant="p">Most recently I taught myself React.js and Material-UI with which I created a Hangman web application and this website. Prior to that I mostly did PHP backend development. Additionally I know how to use HTML, CSS, MySQL and Git for version control.</Typography>
                    <Typography variant="h3">Hobbies:</Typography>
                    <Typography variant="p">My favorite things to do in my free time are running, working out, cooking and playing video games.</Typography>
                </Box>
            </Box>
        </Box>
        )
}

export default About;