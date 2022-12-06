import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";
import { styled } from '@mui/system';

const Resume = () => {

    const CVBox = styled(Box)(({theme}) => ({
        color: theme.palette.light,
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column"
    }));

    const CVBox2 = styled(Box)(({theme}) => ({
        color: theme.palette.light,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: 0
    }));

    return (
        <Box id="wrapperResume" sx={{
            margin: "auto",
            paddingBottom: "8rem",
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
                            color: "light"
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
                        <List>
                            <ListItem>- web developer with more than three years of experience</ListItem>
                            <ListItem>- work experience through apprenticeship in e-commerce company</ListItem>
                        </List>
                    </CVBox>
                    <CVBox>
                        <Typography variant="h3">Experience</Typography>
                        <List>
                            <ListItem>08/2019 - 05/2021</ListItem>
                        </List>
                        <List>
                            <ListItem>apprenticeship in application development (discontinued):</ListItem>
                        </List>
                        <List>
                            <ListItem>moebel.de Einrichten und Wohnen AG</ListItem>
                            <ListItem>- programming in HTML, CSS, Javascript, PHP</ListItem>
                            <ListItem>- working with MYSQL and AWS</ListItem>
                        </List>
                    </CVBox>
                    <CVBox>
                        <Typography variant="h3">Education</Typography>
                        <List>
                            <ListItem>2010 - 2015</ListItem>
                        </List>
                        
                        <List>
                            <ListItem>Gemeinschaftshauptschule Lotte:</ListItem>
                        </List>
                        <List>
                            <ListItem>General Certificate of Secondary Education</ListItem>
                        </List>
                    </CVBox>
                    <CVBox>
                        <Typography variant="h3">Skills</Typography>
                        <List>
                            <ListItem>Languages:</ListItem>
                            <List>
                                <ListItem>- German (native)</ListItem>
                                <ListItem>- English (fluent)</ListItem>
                            </List>
                            <List>
                                <ListItem>Programming languages:</ListItem>
                                <List>
                                    <ListItem>- HTML, CSS, Javascript, React.js, MYSQL</ListItem>
                                </List>
                            </List>
                        </List>
                    </CVBox>
                </Box>
            </Box>
        </Box>
        )
}

export default Resume;