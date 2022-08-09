import React from "react";
import { Typography, Box } from "@mui/material";
import Image from "../images/lighttower-bottom-img.jpg";

const Resume = () => {
    return (
        <Box sx={{
            bgcolor: "black",
            backgroundImage: `url(${Image})`,
            backgroundSize: {xs: "cover", md: "cover"},
            backgroundPosition: {xs: "50% 75%", md: "top"},
            backgroundRepeat: "no-repeat",
            height: "100%",
            minHeight: "70rem"
            }}>
            <Box>
                <Box sx={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="h1" sx={{
                        padding: "0",
                        color: "white"
                    }}>
                        Resume
                    </Typography>
                </Box>

                <Box sx={{
                    padding: "4em",
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
            <Box>
                <Typography sx={{
                    color: "white",
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    Mein Profil
                    - Web Entwickler mit mehr als zwei Jahren Erfahrung
                    - Arbeitserfahrung durch Ausbildung in E-Commerce Unternehmen

                    Praktische Erfahrung
                    08/2019 - 05/2021
                    Ausbildung zum Fachninformatiker für Anwendungsentwicklung (abgebrochen):
                    moebel.de Einrichten und Wohnen AG
                    - Programmierung mit HTML, CSS, PHP, Javascript
                    - Arbeiten mit MYSQL und AWS

                    Bildungsweg
                    2010-2015
                    Gemeinschaftshauptschule Lotte:
                    Mittlere Reife

                    Weitere Kenntnisse

                    Sprachen:
                    - Deutsch (Muttersprache)
                    - Englisch (fließend)

                    Programmiersprachen:
                    - HTML, CSS, Javascript, React.js, MYSQL
                </Typography>
            </Box>
        </Box>
        )
}

export default Resume;