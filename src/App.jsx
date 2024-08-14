import React, { useState } from 'react';
import './App.css';
import tesoura from '../img/tesoura.png';
import pedra from '../img/pedra.png';
import papel from '../img/papel.png';
import GameResult from './GameResult';
import ScoreBoard from './ScoreBoard';


function getRandomChoice() {
  const choices = ['pedra', 'papel', 'tesoura'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'empate';
  if (
    (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
    (playerChoice === 'papel' && computerChoice === 'pedra') ||
    (playerChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    return 'jogador';
  }
  return 'computador';
}

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ jogador: 0, computador: 0, empate: 0 });

  const handlePlayerChoice = (choice) => {
    const computer = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    const gameResult = determineWinner(choice, computer);
    setResult(gameResult);
    setScore((prevScore) => ({
      ...prevScore,
      [gameResult]: prevScore[gameResult] + 1,
    }));
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  const handleReset = () => {
    setScore({ jogador: 0, computador: 0, empate: 0 });
    handlePlayAgain();
  };

  return (
    <>
    <div className="app-container">
      <div className='jogador'>
        <img src={pedra} alt="Pedra" onClick={() => handlePlayerChoice('pedra')} />
        <img src={papel} alt="Papel" onClick={() => handlePlayerChoice('papel')} />
        <img src={tesoura} alt="Tesoura" onClick={() => handlePlayerChoice('tesoura')} />
      </div>

      <ScoreBoard score={score} />

      {result && (
        <GameResult
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
          onPlayAgain={handlePlayAgain}
          onReset={handleReset}
        />
      )}
    </div>

    <div className='footer'>
        Feito por Itallo Ferreira 
      </div>
    </>
  );
}

export default App;
