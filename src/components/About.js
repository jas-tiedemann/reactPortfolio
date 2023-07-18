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
                padding: "8rem 0",
                width: "90%",
                maxWidth: "40rem",
                margin: "auto",
                overflow: "hidden"
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="h2" sx={{
                        padding: "0.75rem 0",
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
                    <Typography variant="p">My name is Jasper Tiedemann and I'm a web developer based in Germany with over four years of experience in building websites.</Typography>
                    <Typography variant="h3">Skills:</Typography>
                    <Typography variant="p">Most recently I created a website for the tattoo and piercing studio Made in Heaven in Osnabrück, Germany. I know how to use Javascript, React.js, Material-UI, HTML, CSS and SCSS</Typography>
                    <Typography variant="h3">Hobbies:</Typography>
                    <Typography variant="p">My favorite things to do in my free time are coding, bouldering, running and playing video games</Typography>
                </Box>
            </Box>
        </Box>
        )
}

export default About;