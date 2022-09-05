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
  import { styled } from '@mui/system';

  const TextBox = styled(Box, {})({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  });

  const HeaderField = styled("p", {})({
    fontSize: "1.5rem"
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
    <Box sx={{
      minHeight: "50rem",
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
        <Typography variant="h1" sx={{
            padding: {xs: "2rem 0", md: "4rem 0"},
            fontSize: {xs: "3rem", sm: "4rem", md: "6rem"}
        }}>
            Contact
        </Typography>
      </Box>
      <Box sx={{
        bgcolor: "white",
        borderRadius: "5px",
        boxShadow: 9,
        width: {xs: "20rem", sm: "26rem", md: "30rem"},
        height: "fit-content",
        padding: "3rem"
      }}>
        <form
          id="messageForm"
          onSubmit={handleSubmit}
          ref={form}
        >
          <TextBox>
            <HeaderField>
              Name:
            </HeaderField>
            <TextField required name="name">
            </TextField>
          </TextBox>
          <TextBox>
            <HeaderField>
              E-mail:
            </HeaderField>
            <TextField required name="email">
            </TextField>
          </TextBox>
          <TextBox>
            <HeaderField>
              Message:
            </HeaderField>
            <TextField multiline rows={4} required name="message">
            </TextField>
          </TextBox>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button type="submit" sx={{
              bgcolor: "black",
              color: "white",
              fontSize: "1rem",
              height: "3rem",
              width: "8rem",
              marginTop: "2rem",
              ":hover": {
                    bgcolor: "white",
                    color: "black",
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