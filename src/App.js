import React from "react";
import { 
  AppBar,
  Typography,
  Toolbar,
  Box
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Error from './components/Error';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Image from "./images/lighttower-img.png";


//green: #0d1517, red: #dd0910
const App = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      minHeight: "969px"
      
    }}>
      <BrowserRouter>
        <AppBar position="sticky" sx={{
            flexDirection: "row-reverse",
            backgroundColor: "black",
            padding: "0 180px",
            opacity: 0.9
        }}>
            <Toolbar>
                <RouterLink to="/" style={{ textDecoration: "none" }}>
                    <Typography variant="h4" sx={{color: "white", margin: "0 2rem",'&:hover': {color: "#dd0910"}}}>Work</Typography>
                </RouterLink>
                <RouterLink to="/about" style={{ textDecoration: "none" }}>
                    <Typography variant="h4" sx={{color: "white", margin: "0 2rem",'&:hover': {color: "#dd0910"}}}>About</Typography>
                </RouterLink>
            </Toolbar>
        </AppBar>
      
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/about" element={<Wrapper />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;