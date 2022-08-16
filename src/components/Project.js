import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";


const Project = ( { projName, ImgSrc, link } ) => {
    return (
        <MuiLink href={link} target="_blank" sx={{
            textDecoration: "none",
            rel: "noopener",
            ":hover": {
                "& .nameOfProj": {
                    color: "#fb020a"
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
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                bgcolor: "white",
                height: {xs: "18rem", md: "23rem", xl: "25rem"},
                width: {xs: "23.4rem", md: "30rem", xl: "32.5rem"},
                margin: "2rem"
            }}>
                <Typography variant="h5" className="nameOfProj" sx={{
                    color: "black",
                    bgcolor: "white",
                    width: "fit-content",
                    borderRadius: "0 0 5px 5px",
                    padding: "0.3rem",
                    margin: "auto"
                }}>
                    {projName}
                </Typography>
            </Box>
        </MuiLink>
        )
}

export default Project;