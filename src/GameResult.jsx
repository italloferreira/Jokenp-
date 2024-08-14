import React from 'react';
import './Game.css';

function GameResult({ playerChoice, computerChoice, result, onPlayAgain, onReset }) {
  return (
    <div className='game-result'>
      <h2>Resultado da Partida</h2>
      <p>Você escolheu: {playerChoice}</p>
      <p>O Computador escolheu: {computerChoice}</p>
      <h3>{result === 'empate' ? 'Empate!' : result === 'jogador' ? 'Você Venceu!' : 'Você Perdeu!'}</h3>
      <div className='botoes'>
      <button onClick={onPlayAgain}>Jogar Novamente</button>
      <button onClick={onReset}>Reiniciar Jogo</button>
      </div>
    </div>
  );
}

export default GameResult;
