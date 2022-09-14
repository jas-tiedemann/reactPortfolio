import React from "react";
import { 
    Box
  } from "@mui/material";
  import { styled } from '@mui/system';

  const FooterAnchor = styled("a")(({theme}) => ({
    color: theme.palette.light,
    textDecoration: "none",
    margin: "0 2rem",
    ":hover": {
        color: theme.palette.beige
    }
  })); 

  const Footer = () => {
    return (
        <Box sx={{
            bgcolor: "dark",
            color: "light",
            minHeight: "2rem",
            display: "flex",
            alignContent: "center",
            padding: "1rem 0"
        }}>
          <FooterAnchor href="#terms">Terms of Use</FooterAnchor>
          <FooterAnchor href="#privacy">Privacy Policy</FooterAnchor>
        </Box>
    )};

  export default Footer;