import React from "react";
import Project from "./Project";
import { Box, Typography } from "@mui/material";
import HangmanImage from "../images/hangman-screenshot.PNG";
import AsciiImage from "../images/ascii-tree-img.PNG";
import { styled } from '@mui/system';


const ProjectList = () => {
      const ItemBox = styled(Box, {})({
        display: "flex",
        justifyContent: "center",
        margin: "auto"
      });


    return (
        <Box sx={{
            width: "100%"
            }}>
            <Box sx={{
                padding: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                bgcolor: "white" 
            }}>
                <Typography variant="h1" sx={{
                    fontSize: {xs: "4rem", md: "6rem"},
                    color: "black"                   
                }}>
                    Projects
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: {xs: "column", lg: "row"},
                minHeight: {xs: "20rem", md: "50rem"},
                width: "100%",
                justifyContent: "center",
                padding: 0
            }}>
                <ItemBox sx={{
                    width: {xs: "20rem", md: "50rem"}
                }}>
                    <Project projName={"Hangman"} ImgSrc={HangmanImage} link={"http://localhost:8000/"} />
                </ItemBox>
                <ItemBox sx={{
                    width: {xs: "20rem", md: "50rem"}
                }}>
                    <Project projName={"ASCII-Tree"} ImgSrc={AsciiImage} />
                </ItemBox>
            </Box>
        </Box>
    );
}

export default ProjectList;