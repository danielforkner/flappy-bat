import React, { useState } from 'react';
import bat from '../assets/batFlap.gif';
import Board from './Board';
const Game = () => {
  const [tickSpeed, setTickSpeed] = useState(1);
  const [score, setScore] = useState(0);

  function handleKeyPress(event) {
    if (event.keyCode === 38) {
      alert('hello');
    }
  }

  return (
    <div className="gameArea">
      <div>{score}</div>
      <Board />
      <img src={bat} alt="sprite" />
    </div>
  );
};

export default Game;
