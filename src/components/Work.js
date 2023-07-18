import React from "react";
import Project from "./Project";
import { Box, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import AsciiImage from "../images/ascii-tree-img.PNG";
import ImageForest from "../images/forest-img.jpg";
import { styled } from '@mui/system';

const ProjectList = () => {
    const ItemBox = styled(Box, {})({
        display: "flex",
        justifyContent: "center",
        margin: "auto"
    });


    return (
        <Box id="wrapperWork" sx={{
            backgroundImage: `url(${ImageForest})`,
            backgroundSize: "cover",
            backgroundPosition: {xs: "50%", md: "top"},
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "8rem 0"
          }}>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                bgcolor: "transparent" 
            }}>
                <Typography variant="h2" sx={{
                    color: "dark",
                    paddingBottom: {xs: "5rem"}
                }}>
                    Work
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: {xs: "column", lg: "row"},
                minHeight: {xs: "20rem", md: "50rem"},
                width: {xs: "100%", sm: "80%"},
                justifyContent: "center",
                padding: 0,
                margin: "auto"
            }}>
                <ItemBox>
                    <Project projName={"Hangman"} imgSrc={HangmanImage} link={"https://jas-tiedemann.github.io/reactHangman/"} projDesc="My first project I built using React.js and Material-UI. Other languages used are HTML and CSS" />
                </ItemBox>
            </Box>
        </Box>
    );
}

export default ProjectList;