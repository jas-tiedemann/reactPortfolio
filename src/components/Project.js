import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";


const Project = ( { projName, ImgSrc, link } ) => {
    return (
        <MuiLink href={link} target="_blank" sx={{
            textDecoration: "none",
            rel: "noopener",
            ":hover": {
                "& .nameOfProj": {
                    color: "beige"
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
                borderColor: "light",
                boxShadow: 7,
                backgroundImage: `url(${ImgSrc})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                bgcolor: "light",
                height: {xs: "16rem", sm: "19rem", xl: "25rem"},
                width: {xs: "20.8rem", sm: "24.7rem", xl: "32.5rem"},
                margin: "2rem auto"
            }}>
                <Typography variant="h5" className="nameOfProj" sx={{
                    color: "dark",
                    bgcolor: "light",
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