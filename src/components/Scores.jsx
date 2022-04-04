import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scores = () => {
  const [scores, setScores] = useState([]);
  const loadScores = async () => {
    try {
      const scores = await axios.get('/api/scores');
      setScores(scores.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadScores();
  }, []);

  return (
    <div className="scoresContainer">
      <h4>High Scores</h4>
      <div className="scores">
        {scores.map((score, i) => {
          return (
            <p key={`score:${i}`}>
              {score.player}: {score.score}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Scores;
