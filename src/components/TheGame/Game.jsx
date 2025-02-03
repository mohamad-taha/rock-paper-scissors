import React, { useContext } from "react";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import paper from "../../assets/images/icon-paper.svg";
import rulesImg from "../../assets/images/image-rules.svg";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "./Game.css";

const Game = () => {
  const modal = () => {
    Swal.fire({
      title: "Rules",
      imageUrl: rulesImg,
      imageAlt: "rules image",
    });
  };

  const { setChoice } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="gameContainer">
      <div>
        <button
          className="gameBtn"
          onClick={() => {
            setChoice("paper");
            navigate("/game");
          }}
        >
          <img src={paper} alt="paper" />
        </button>
        <button
          className="gameBtn"
          onClick={() => {
            setChoice("rock");
            navigate("/game");
          }}
        >
          <img src={rock} alt="rock" />
        </button>
        <button
          className="gameBtn"
          onClick={() => {
            setChoice("scissors");
            navigate("/game");
          }}
        >
          <img src={scissors} alt="scissors" />
        </button>
      </div>
      <button onClick={modal}>RULES</button>
    </div>
  );
};

export default Game;
