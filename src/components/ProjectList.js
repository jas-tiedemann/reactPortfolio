import React from "react";
import Project from "./Project";
import { Grid, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import Kacke from "../images/ascii-tree-img.PNG";


const ProjectList = () => {
    return (
        <Grid container columnSpacing={{ xs: 5 }} sx={{alignItems: "center", justifyContent: "center"}}>
            <Grid item xs={12} align="center">
                <Typography variant="h1" sx={{
                    padding: "3rem"
                }}>
                    Projects
                </Typography>
            </Grid>
            <Grid item xs={4, {width: "500px"}} align="center">
                <Project projName={"Hangman"} ImgSrc={HangmanImage} link={"http://localhost:8000/"} />
            </Grid>
            <Grid item xs={4, {width: "500px"}} align="center">
                <Project projName={"ASCII-Tree"} ImgSrc={Kacke} />
            </Grid>
        </Grid>
    );
}

export default ProjectList;