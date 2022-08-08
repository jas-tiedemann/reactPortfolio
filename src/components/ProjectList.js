import React from "react";
import Project from "./Project";
import { Grid, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import AsciiImage from "../images/ascii-tree-img.PNG";


const ProjectList = () => {
    return (
        <Grid container xs={12} spacing={6} item={true} sx={{
            marginBottom: "8rem",
            minHeight: "70rem",
            alignItems: "center",
            justifyContent: "center"
            }}>
            <Grid item xs={12} align="center">
                <Typography variant="h1" sx={{
                    fontSize: {xs: "4rem", md: "6rem"},
                    marginTop: "10rem",
                    width: {xs: "26rem", md: "30rem", xl: "40rem"},
                    color: "black",
                    bgcolor: {xs: "white", md: "transparent"},
                    borderRadius: 2
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