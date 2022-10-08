import React from "react";
import { useState } from "react";
import { 
    Box
  } from "@mui/material";
  import Privacy from "./Privacy";
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

    const [showPrivacy, setShowPrivacy] = useState(false);

    const handleClose = () => {
      setShowPrivacy(false);
    }

    return (
        <Box sx={{
            bgcolor: "dark",
            color: "light",
            minHeight: "2rem",
            display: "flex",
            alignContent: "center",
            padding: "1rem 0"
        }}>
          <FooterAnchor href="#privacy" onClick={() => setShowPrivacy(true)}>Privacy Policy</FooterAnchor>
          <Privacy open={showPrivacy} handleClose={handleClose} />
        </Box>
    )};

  export default Footer;