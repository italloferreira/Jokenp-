import React from 'react';
import './Score.css';

function ScoreBoard({ score }) {
  return (
    <div className='score-board'>
      <h2>PLACAR</h2>
      <p>Vitórias do Jogador: {score.jogador}</p>
      <p>Vitórias do Computador: {score.computador}</p>
      <p>Empates: {score.empate}</p>
    </div>
  );
}

export default ScoreBoard;
