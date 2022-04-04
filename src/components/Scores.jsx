import React from 'react';

const Scores = () => {
  const clickHandler = async () => {
    const scores = await fetch('/api/scores');
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
