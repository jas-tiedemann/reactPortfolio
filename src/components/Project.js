import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";


const Project = ( { projName, ImgSrc, link } ) => {
    return (
        <MuiLink href={link} target="_blank" sx={{
            textDecoration: "none",
            margin: "6rem",
            rel: "noopener"
        }}>
            <Box sx={{
                borderRadius: 2,
                boxShadow: 7,
                backgroundImage: `url(${ImgSrc})`,
                backgroundSize: "30rem",
                width: "30rem",
                height: "23rem"
            }}>
                <Typography variant="h5" sx={{
                    color: "#A0A0A0",
                    bgcolor: "transparent"
                }}>
                    {projName}
                </Typography>
            </Box>
        </MuiLink>
        )
}

export default Project;