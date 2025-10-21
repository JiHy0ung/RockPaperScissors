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
        border: "4px solid black",
      }}
    >
      <h1>{props.player}</h1>
      <img src={props.select && props.select.img} />
      <p>win</p>
    </Container>
  );
};

export default Box;
