import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from '@mui/system';

const Resume = () => {

    const CVBox = styled(Box, {})({
        color: "white",
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column"
    });

    const CVBox2 = styled(Box, {})({
        color: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: 0
    });

    return (
        <Box id="wrapperResume" sx={{
            margin: "auto",
            bgcolor: "dark"
        }}>
            <Box sx={{ 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
                width: "90%",
                maxWidth: "40rem",
                margin: "auto",
                padding: "2rem 0"
            }}>
                <Box>
                    <Box sx={{
                        paddingTop: "4rem",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Typography variant="h2" sx={{
                            paddingBottom: "3rem",
                            color: "white"
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
                                <Typography variant="p" sx={{
                                    padding: 0,
                                    margin: 0
                                }}>
                                    Jasper Tiedemann
                                </Typography>
                            </CVBox2>
                            <CVBox2>
                                <Typography variant="p">
                                    Frontend Developer
                                </Typography>
                            </CVBox2>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%"
                    }}>
                    <CVBox>
                        <Typography variant="h3">My Profile</Typography>
                        <Typography variant="p">
                            - web developer with more than three years of experience
                        </Typography>
                        <Typography variant="p">
                            - work experience through apprenticeship in e-commerce company
                        </Typography>
                    </CVBox>
                    <CVBox>
                        <Typography variant="h3">Experience</Typography>
                        <Typography variant="p">
                            08/2019 - 05/2021<br></br>
                            apprenticeship in application development (discontinued):<br></br>
                            moebel.de Einrichten und Wohnen AG<br></br>
                            - programming in HTML, CSS, PHP, Javascript<br></br>
                            - working with MYSQL and AWS
                        </Typography>
                    </CVBox>
                    <CVBox>
                        <Typography variant="h3">Education</Typography>
                        <Typography variant="p">
                            2010 - 2015<br></br>
                            Gemeinschaftshauptschule Lotte:<br></br>
                            General Certificate of Secondary Education
                        </Typography>
                    </CVBox>
                    <CVBox>
                        <Typography variant="h3">Skills</Typography>
                        <Typography variant="p">
                            Languages:<br></br>
                            - German (native)<br></br>
                            - English (fluent)<br></br>
                            <br></br>
                            Programming languages:<br></br>
                            - HTML, CSS, Javascript, React.js, MYSQL
                        </Typography>
                    </CVBox>
                </Box>
            </Box>
        </Box>
        )
}

export default Resume;