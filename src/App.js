import React from 'react';
import { Game } from './components';
import Scores from './components/Scores';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Game />
      <Scores />
    </div>
  );
}

export default App;
