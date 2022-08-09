import React from "react";
import { Typography, Box } from "@mui/material";
import Image from "../images/lighttower-bottom-img.jpg";
import { styled } from '@mui/system';

const Resume = () => {

    const CVHeaderText = styled("h3", {})({
        color: "white",
        margin: "0"

      });

      const CVMainText = styled(Typography, {})({
        color: "white",
        fontSize: "2rem"

      });

      const CVBox = styled(Box, {})({
        color: "white",
        fontSize: "2rem",
        margin: "1rem 2rem",
        display: "flex",
        flexDirection: "column"
      });

    return (
        <Box sx={{
            bgcolor: "black",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: {xs: "50% 75%", md: "top"},
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%"
        }}>
            <Box sx={{
                maxWidth: "40rem",
                margin: "auto"
            }}>
                <Box>
                    <Box sx={{
                        paddingTop: "5rem",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Typography variant="h1" sx={{
                            padding: "0",
                            color: "white",
                            fontSize: {xs: "4rem", md: "6rem"}
                        }}>
                            Resume
                        </Typography>
                    </Box>

                    <Box sx={{
                        padding: "4rem",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "auto"
                    }}>
                        <Box sx={{
                            padding: "0",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDireaction: "column",
                            margin: "auto"
                        }}>
                            <Typography variant="p" sx={{
                                color: "white",
                                width: "100%",
                                fontSize: "2em",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Jasper Tiedemann
                            </Typography>
                        </Box>
                        <Box sx={{
                            padding: "0",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDireaction: "column",
                            margin: "auto"
                        }}>
                            <Typography variant="p" sx={{
                                color: "white",
                                width: "100%",
                                fontSize: "2em",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Frontend Developer
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    }}>
                    <CVBox>
                        <CVHeaderText>My Profile</CVHeaderText>
                        <CVMainText>
                            - web developer with more than two years of experience<br></br>
                            - work experience through apprenticeship in e-commerce company
                        </CVMainText>
                    </CVBox>
                    <CVBox>
                        <CVHeaderText>Experience</CVHeaderText>
                        <CVMainText>
                            08/2019 - 05/2021<br></br>
                            apprenticeship in application development (discontinued):<br></br>
                            moebel.de Einrichten und Wohnen AG<br></br>
                            - programming in HTML, CSS, PHP, Javascript<br></br>
                            - working with MYSQL und AWS
                        </CVMainText>
                    </CVBox>
                    <CVBox>
                        <CVHeaderText>Education</CVHeaderText>
                        <CVMainText>
                            2010-2015
                            Gemeinschaftshauptschule Lotte:<br></br>
                            secondary school level certificate
                        </CVMainText>
                    </CVBox>
                    <CVBox>
                        <CVHeaderText>Skills</CVHeaderText>
                        <CVMainText>
                            Languages:<br></br>
                            - German (native)<br></br>
                            - English (fluent)

                            programming languages:<br></br>
                            - HTML, CSS, Javascript, React.js, MYSQL
                        </CVMainText>
                    </CVBox>
                </Box>
            </Box>
        </Box>
        )
}

export default Resume;