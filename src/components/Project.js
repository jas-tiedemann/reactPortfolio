import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";


const Project = ( { projName, imgSrc, link, projDesc } ) => {
    return (
        <MuiLink href={link} target="_blank" sx={{
            textDecoration: "none",
            rel: "noopener",
            ":hover": {
                "& .nameOfProj": {
                    color: "beige",
                    bgcolor: "dark",
                },
                "& .linkBoxDescription": {
                    visibility: "visible",
                    bottom: "0"
                },
                "& .linkBox": {
                    boxShadow: 20,
                    borderColor: "beige",
                }
            }
        }}>
            <Box className="linkBox" sx={{
                borderRadius: 2,
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: "light",
                boxShadow: 7,
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                bgcolor: "light",
                height: {xs: "16rem", sm: "19rem", xl: "25rem"},
                width: {xs: "20.8rem", sm: "24.7rem", xl: "32.5rem"},
                margin: "2rem auto",
                position: "relative",
                overflow: "hidden"
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
                <Box className="linkBoxDescription" sx={{
                    position: "absolute",
                    bottom: "0%",
                    bgcolor: "dark",
                    width: "100%",
                    height: "66%",
                    margin: "auto",
                    visibility: {xs: "visible", md: "hidden"},
                    bottom: {xs: "0", md: "-520px"},
                    transition: "0.2s ease-in-out",
                    display: "flex",
                    justifyContent: "center",
                    opacity: "0.9"
                }}>
                    <Typography variant="p" sx={{
                        color: "light",
                        width: "80%",
                        fontSize: {xs: "1rem", md: "1.25rem"},
                        padding: "0.5rem"
                    }}>
                        {projDesc}
                    </Typography>
                </Box>
            </Box>
        </MuiLink>
    )
}

export default Project;