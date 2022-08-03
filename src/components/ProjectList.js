import React from "react";
import Project from "./Project";
import { Grid, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import AsciiImage from "../images/ascii-tree-img.PNG";


const ProjectList = () => {
    return (
        <Grid container xs={12} spacing={6} item={true} align="center" sx={{
            justifyContent: "flex-start",
            marginBottom: "8rem"
            }}>
            <Grid item xs={12}>
                <Typography variant="h1" sx={{
                    fontSize: {xs: "4rem", md: "6rem"},
                    marginTop: "10rem"
                }}>
                    Projects
                </Typography>
            </Grid>
            <Grid item lg={6} align="center">
                <Project projName={"Hangman"} ImgSrc={HangmanImage} link={"http://localhost:8000/"} />
            </Grid>
            <Grid item lg={6} align="center">
                <Project projName={"ASCII-Tree"} ImgSrc={AsciiImage} />
            </Grid>
        </Grid>
    );
}

export default ProjectList;