import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [result, setResult] = useState('Make your move!');

  const playGame = (playerChoice)=>{
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let gameResult = '';

    if (playerChoice === computerChoice) {
      gameResult = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      gameResult = 'You win!';
    } else {
      gameResult = 'You lose!';
    }

    setResult(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${gameResult}`)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">RPS - Game</h1>
      <div className="text-center mt-5">
        <button className="btn btn-primary mx-2" onClick={()=>playGame('rock')}>Rock</button>
        <button className="btn btn-primary mx-2" onClick={()=>playGame('paper')}>Paper</button>
        <button className="btn btn-primary" onClick={()=>playGame('scissors')}>Scissors</button>
      </div>
      <div class="text-center mt-4">
        <h3 id="result">{result}</h3>
      </div>
    </div>
  );
}

export default App;
