import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";
import { useNavigate } from "react-router-dom";
import "./App.css";

const INITIAL = "";
const A_PLAYER = "X";
const B_PLAYER = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ A: 0, B: 0 });
  const navigate = useNavigate();

  function isGameOver() {
    if (!gameFinished) {
      //* X win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === A_PLAYER &&
          grid[winCombination[i][1]] === A_PLAYER &&
          grid[winCombination[i][2]] === A_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.A + 1 });
          console.log("X WON");
          return;
        }
      }

      //* O win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === B_PLAYER &&
          grid[winCombination[i][1]] === B_PLAYER &&
          grid[winCombination[i][2]] === B_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, O: winCount.B + 1 });
          console.log("O WON");
          return;
        }
      }

      //* Draw game check
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
        console.log("Empate");
      }
    }
  }

  function restartGame() {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  }

  function clearHistory() {
    setwinCount({ A: 0, B: 0 });
    restartGame();
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return A_PLAYER;
          } else {
            return B_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }
  
  function goToProfile() {
    navigate("/perfil");
  }
  
  function handleLogout() {
    // Lógica para fazer logout
    navigate("/");
  }

  return (
    <div align="center">
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      <br></br>
      <span className="win-history">
        X's Ganhou: {winCount.A}
        <br />
        O's Ganhou: {winCount.B}
      </span>
      <br></br>
      <br></br>
      {gameFinished && (
        <EndGame
          winCount={winCount}
          restartGame={restartGame}
          player={player}
          draw={draw}
          clearHistory={clearHistory}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
      <br></br>
      <br></br>
      <div>
        <button onClick={goToProfile} className="btn">Ir para o Perfil</button>
      </div>
    </div>
  );
}

export default TicTacToe;
