import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "B WON" : "A WON"}</span>}
      {draw && <span className="win-text">Empate</span>}

      <span className="win-history">
        X Ganhou: {winCount.A}
        <br />
        O Ganhou: {winCount.B}
      </span>

      <button className="btn" onClick={restartGame}>
        Reiniciar Jogo
      </button>
      <button className="btn" onClick={clearHistory}>
        Apagar Historico
      </button>
    </div>
  );
}

export default EndGame;
