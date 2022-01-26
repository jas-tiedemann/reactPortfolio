import React from "react";
import { Typography, Container } from "@mui/material";

const Error = () => {
    return (
        <Container>
            <Typography variant="h1" sx={{
                display: "flex",
                justifyContent: "center",
                padding: "3rem"
            }}>
                Site does not exist
            </Typography>
        </Container>
        )
}

export default Error;