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

  const TextBox = styled(Box, {})({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem 0"
  });


  const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, "PUBLIC_KEY")
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
      backgroundImage: `url(${ImageShore})`,
      backgroundSize: "cover",
      backgroundPosition: {xs: "50%", md: "75%"},
      backgroundRepeat: "no-repeat",
      minHeight: "50rem",
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
            padding: {xs: "2rem 0", md: "4rem 0"},
            color: "dark"
        }}>
            Contact
        </Typography>
      </Box>
      <Box sx={{
        bgcolor: "light",
        borderRadius: "5px",
        boxShadow: 9,
        width: {xs: "85%", sm: "26rem", md: "30rem"},
        height: "fit-content",
        padding: "3rem"
      }}>
        <form
          id="messageForm"
          onSubmit={handleSubmit}
          ref={form}
        >
          <TextBox>
            <Typography variant="p">Name:</Typography>
            <TextField required name="name">
            </TextField>
          </TextBox>
          <TextBox>
            <Typography variant="p">E-mail:</Typography>
            <TextField required name="email">
            </TextField>
          </TextBox>
          <TextBox>
            <Typography variant="p">Message:</Typography>
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