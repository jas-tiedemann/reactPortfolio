import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from '@mui/system';

const Resume = () => {

    const CVHeader1 = styled("h4", {})({
        color: "white",
        margin: "0"

      });

      const CVMainText = styled("p", {})({
        color: "white",
        fontSize: "2rem",
        paddingBottom: "2rem"
      });

      const CVBox = styled(Box, {})({
        color: "white",
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column"
      });
      
      const CVBox2 = styled(Box, {})({
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: 0
      });

    return (
        
        <Box sx={{
            maxWidth: "40rem",
            margin: "auto",
            padding: "4rem",
            height: "100%",
            width: "100%"
        }}>
            <Box>
                <Box sx={{
                    paddingTop: "4rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="h1" sx={{
                        paddingBottom: "3rem",
                        color: "white",
                        fontSize: {xs: "4rem", md: "6rem"}
                    }}>
                        Resume
                    </Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "auto",
                    paddingBottom: "4rem"
                }}>
                    <Box sx={{
                        padding: "0",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "auto"
                    }}>
                        <CVBox2>
                            <CVMainText sx={{
                                padding: 0,
                                margin: 0
                            }}>
                                Jasper Tiedemann
                            </CVMainText>
                        </CVBox2>
                        <CVBox2>
                            <CVMainText>
                                Frontend Developer
                            </CVMainText>
                        </CVBox2>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
                }}>
                <CVBox>
                    <CVHeader1>My Profile</CVHeader1>
                    <CVMainText>
                        - web developer with more than two years of experience<br></br>
                        - work experience through apprenticeship in e-commerce company
                    </CVMainText>
                </CVBox>
                <CVBox>
                    <CVHeader1>Experience</CVHeader1>
                    <CVMainText>
                        08/2019 - 05/2021<br></br>
                        apprenticeship in application development (discontinued):<br></br>
                        moebel.de Einrichten und Wohnen AG<br></br>
                        - programming in HTML, CSS, PHP, Javascript<br></br>
                        - working with MYSQL and AWS
                    </CVMainText>
                </CVBox>
                <CVBox>
                    <CVHeader1>Education</CVHeader1>
                    <CVMainText>
                        2010-2015
                        Gemeinschaftshauptschule Lotte:<br></br>
                        secondary school level certificate
                    </CVMainText>
                </CVBox>
                <CVBox>
                    <CVHeader1>Skills</CVHeader1>
                    <CVMainText>
                        Languages:<br></br>
                        - German (native)<br></br>
                        - English (fluent)<br></br>
                        <br></br>
                        programming languages:<br></br>
                        - HTML, CSS, Javascript, React.js, MYSQL
                    </CVMainText>
                </CVBox>
            </Box>
        </Box>
        )
}

export default Resume;