import React from "react";
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
    fontSize: "2rem"
  });

  const Contact = () => {
        
    return (
    <Box sx={{
      minHeight: "60rem",
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
            padding: "4rem 0",
            fontSize: {xs: "3rem", sm: "4rem", md: "6rem"}
        }}>
            Contact
        </Typography>
      </Box>
      <Box sx={{
        bgcolor: "white",
        borderRadius: "5px",
        boxShadow: 9,
        width: {xs: "20rem", md: "30rem"},
        padding: "3rem"
      }}>
        <form>
          <TextBox>
            <HeaderField>
              Name:
            </HeaderField>
            <TextField>
            </TextField>
          </TextBox>
          <TextBox>
            <HeaderField>
              Email:
            </HeaderField>
            <TextField>
            </TextField>
          </TextBox>
          <TextBox>
            <HeaderField>
              Message:
            </HeaderField>
            <TextField multiline rows={4}>
            </TextField>
          </TextBox>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button sx={{
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