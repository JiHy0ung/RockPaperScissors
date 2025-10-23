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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomValue = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomValue];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "Win" : "Lose";
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box player="You" select={userSelect} result={result} />
        <Box player="Computer" select={computerSelect} result={result} />
      </Container>
      <ButtonGroup
        variant="contained"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "none",
          "& .MuiButton-root": {
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            outline: "none",
            "&:hover": { backgroundColor: "#f0f0f0" },
          },
        }}
      >
        <Button onClick={() => play("scissors")}>가위</Button>
        <Button onClick={() => play("rock")}>바위</Button>
        <Button onClick={() => play("paper")}>보</Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
