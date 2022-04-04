import React from 'react';
import axios from 'axios';

const Scores = () => {
  const clickHandler = async () => {
    const scores = await axios.get('/api/scores');
    console.log(scores);
  };

  return (
    <div className="scoresContainer">
      <h4>High Scores</h4>
      <button onClick={clickHandler}>get scores</button>
    </div>
  );
};

export default Scores;
