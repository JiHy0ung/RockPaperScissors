import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Box = (props) => {
  const defaultImg = "/question_mark.png";

  const imageSrc = props.select ? props.select.img : defaultImg;

  return (
    <Container
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "40%",
        border: "10px solid black",
        backgroundColor: "white",
        gap: 3,
        p: 3,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: "black",
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
        }}
      >
        {props.player}
      </Typography>
      <img
        src={imageSrc}
        style={{
          width: "fit-content",
          height: "auto",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
      <Typography variant="h5" sx={{ color: "black" }}>
        win
      </Typography>
    </Container>
  );
};

export default Box;
