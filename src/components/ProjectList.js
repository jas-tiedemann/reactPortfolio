import React from "react";
import Project from "./Project";
import { Grid, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import AsciiImage from "../images/ascii-tree-img.PNG";


const ProjectList = () => {
    return (
        <Grid container columnSpacing={{ xs: 12 }} sx={{
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60rem",
            marginBottom: "8rem"
            }}>
            <Grid item xs={12} align="center">
                <Typography variant="h1">
                    Projects
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