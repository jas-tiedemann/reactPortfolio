import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { 
    Box,
    TextField,
    Typography,
    Button
  } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ImageShore from "../images/shore-img.jpg";
import { styled } from '@mui/system';
import { InputLabel } from '@mui/material';
import { Link } from "react-router-dom";

const SERVICE_ID = "HELLO";
const TEMPLATE_ID = "HELLOHELLO";
const PUBLIC_KEY = "HELLOHELLOHELLO";


  const TextBox = styled(Box, {})({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem 0"
  });

  const LabelStyled = styled(InputLabel, {})({
    margin: "0.75rem 0"
  });


const Contact = () => {



  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("E-Mail sent successfully!");
        window.location.reload(false);
      }, (error) => {
        console.log(error.text);
      });
  };

    return (
    <Box id="wrapperContact" sx={{
      backgroundImage: {sm: `url(${ImageShore})`},
      backgroundSize: "cover",
      backgroundPosition: {xs: "50%", md: "75%"},
      backgroundRepeat: "no-repeat",
      bgcolor: "light",
      height: "100%",
      color: "dark",
      paddingBottom: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "top"
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography variant="h2" sx={{
            paddingTop: {xs: "2rem", sm: "8rem"},
            paddingBottom: {xs: "0", sm: "4rem"},
            color: "dark"
        }}>
            Contact
        </Typography>
      </Box>
      <Box sx={{
        bgcolor: "light",
        borderRadius: "5px",
        boxShadow: {sm: 9},
        width: {xs: "85%", sm: "26rem", md: "30rem"},
        height: "fit-content",
        padding: {xs: 0, sm: "3rem"}
      }}>
        <form
          id="messageForm"
          onSubmit={handleSubmit}
          ref={form}
        >
          <TextBox>
            <LabelStyled>Name:</LabelStyled>
            <TextField required name="name">
            </TextField>
          </TextBox>
          <TextBox>
            <LabelStyled>E-mail:</LabelStyled>
            <TextField required name="email">
            </TextField>
          </TextBox>
          <TextBox>
            <LabelStyled>Message:</LabelStyled>
            <TextField multiline rows={4} required name="message">
            </TextField>
          </TextBox>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button type="submit" sx={{
              bgcolor: "dark",
              color: "light",
              fontSize: "1rem",
              height: "3rem",
              width: "8rem",
              marginTop: "2rem",
              ":hover": {
                    bgcolor: "light",
                    color: "dark",
                    border: "1px solid"
                  }
            }}>
              <SendIcon />
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
        
  )};

  export default Contact;