import React, { useState, useEffect } from "react";
import bat from "../assets/batFlap.gif";
import Board from "./Board";
const Game = () => {
  const [tickSpeed, setTickSpeed] = useState(1);
  const [score, setScore] = useState(0);
  const [batPosition, setBatPosition] = useState({ row: 5, col: 5 });

  function handleKeyPress(event) {
    if (event.key === " ") {
      batPosition.row++;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      handleKeyPress(event);
    });
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="gameArea">
      <div>{score}</div>
      {/* <Board /> */}
      {/* <input type="text" value={score} onKeyPress={handleKeyPress} /> */}
      <img src={bat} alt="sprite" onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Game;
