import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";


const Project = ( { projName, ImgSrc, link } ) => {
    return (
        <MuiLink href={link} target="_blank" sx={{
            textDecoration: "none",
            margin: "6rem",
            rel: "noopener",
            ":hover": {
                "& .nameOfProj": {
                    color: "#dd0910"
                },
                "& .linkBox": {
                    boxShadow: 20
                }
            }
        }}>
            <Box className="linkBox" sx={{
                borderRadius: 2,
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: "white",
                boxShadow: 7,
                backgroundImage: `url(${ImgSrc})`,
                backgroundSize: "30rem",
                width: "30rem",
                height: "23rem"
            }}>
                <Typography variant="h5" className="nameOfProj" sx={{
                    color: "black",
                    bgcolor: "white",
                    width: "fit-content",
                    borderRadius: "0 0 5px 5px",
                    padding: "0.3rem"
                }}>
                    {projName}
                </Typography>
            </Box>
        </MuiLink>
        )
}

export default Project;