import React from "react";
import { 
  AppBar,
  Typography,
  Toolbar,
  Box
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProjectList from './components/ProjectList';
import Error from './components/Error';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Image from "./images/lighttower-img.jpg";


//green: #0d1517, red: #dd0910
const App = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      minHeight: "1000px"
      
    }}>
      <BrowserRouter>
        <AppBar position="sticky" sx={{
            flexDirection: "row-reverse",
            backgroundColor: "#0b161a",
            padding: "0 180px",
            opacity: "0.8"
        }}>
            <Toolbar>
                <RouterLink to="/" style={{ textDecoration: "none" }}>
                    <Typography variant="h4" sx={{color: "white", margin: "0 2rem"}}>Work</Typography>
                </RouterLink>
                <RouterLink to="/about" style={{ textDecoration: "none" }}>
                    <Typography variant="h4" sx={{color: "white", margin: "0 2rem"}}>About</Typography>
                </RouterLink>
            </Toolbar>
        </AppBar>
      
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;