import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import paper from "../../assets/images/icon-paper.svg";
import { useNavigate } from "react-router-dom";
import "./Match.css";

const Game = () => {
  const navigate = useNavigate();
  const { choice, setCount } = useContext(Context);
  const [computerChoice, setComputerChoice] = useState("");
  const [roundResult, setRoundResult] = useState("");

  const gameChoices = [
    {
      name: "rock",
      image: rock,
      borderColor: "#eba216",
    },
    {
      name: "paper",
      image: paper,
      borderColor: "#4d6af4",
    },
    {
      name: "scissors",
      image: scissors,
      borderColor: "#dd3b59",
    },
  ];

  const playerChoice = gameChoices.find((option) => option.name === choice);
  const computer = gameChoices.find((option) => option.name === computerChoice);

  useEffect(() => {
    const randomChoice =
      gameChoices[Math.floor(Math.random() * gameChoices.length)];
    setComputerChoice(randomChoice.name);
  }, []);

  useEffect(() => {
    if (!computerChoice || !choice) return;

    if (choice === computerChoice) {
      setRoundResult("IT'S A DRAW");
    } else if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "scissors" && computerChoice === "paper") ||
      (choice === "paper" && computerChoice === "rock")
    ) {
      setRoundResult("YOU WON");
      setCount((prev) => prev + 1);
    } else {
      setRoundResult("YOU LOST");
      setCount(0);
    }
  }, [computerChoice, choice]);

  return (
    <div className="matchContainer">
      <div>
        <span>YOU PICKED</span>
        <div
          className="gameBtn"
          style={{
            borderColor: playerChoice?.borderColor,
          }}
        >
          <img src={playerChoice?.image} alt={playerChoice?.name} />
        </div>
      </div>
      <div>
        <span>{roundResult}</span>
        <button onClick={() => navigate("/")}>PLAY AGAIN</button>
      </div>
      <div>
        <span>HOUSE PICKED</span>
        <div
          style={{
            borderColor: computer?.borderColor,
          }}
          className="gameBtn"
        >
          <img src={computer?.image} alt={computer?.name} />
        </div>
      </div>
    </div>
  );
};

export default Game;
