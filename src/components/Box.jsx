import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Box = (props) => {
  console.log(props);
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
      <Typography variant="h3" sx={{ color: "black", fontWeight: "bold" }}>
        {props.player}
      </Typography>
      <img
        src={props.select && props.select.img}
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
