import React from "react";
import Project from "./Project";
import { Grid, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import AsciiImage from "../images/ascii-tree-img.PNG";


const ProjectList = () => {
    return (
        <Grid container columnSpacing={{ xs: 12 }} rowSpacing={{ xs: 0 }} sx={{alignItems: "center", justifyContent: "center", minHeight: "65rem"}}>
            <Grid item xs={12} align="center">
                <Typography variant="h1" sx={{
                    padding: "1rem"
                }}>
                    Projects and <br></br>Achievements
                </Typography>
            </Grid>
            <Grid item xs={4} align="center">
                <Project projName={"Hangman"} ImgSrc={HangmanImage} link={"http://localhost:8000/"} />
            </Grid>
            <Grid item xs={4} align="center">
                <Project projName={"ASCII-Tree"} ImgSrc={AsciiImage} />
            </Grid>
        </Grid>
    );
}

export default ProjectList;