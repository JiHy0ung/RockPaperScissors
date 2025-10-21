import { Container } from "@mui/system";
import "./App.css";
import Box from "./components/Box";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const choice = {
  rock: { name: "Rock", img: "/rock.png" },
  scissors: { name: "Scissors", img: "/scissors.png" },
  paper: { name: "Paper", img: "/paper.png" },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box player="You" select={userSelect} />
        <Box player="Computer" select={userSelect} />
      </Container>
      <ButtonGroup
        variant="contained"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
            outline: "none",
            border: "1px solid white",
          }}
          onClick={() => play("scissors")}
        >
          가위
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
            outline: "none",

            border: "1px solid white",
          }}
          onClick={() => play("rock")}
        >
          바위
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
            outline: "none",

            border: "1px solid white",
          }}
          onClick={() => play("paper")}
        >
          보
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
