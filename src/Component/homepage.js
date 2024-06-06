import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { levelGame, resetGame } from "../Redux/action";
import "./HomePage.css";
import GameBoard from "./Gameboard";

const HomePage = () => {
  const [difficulty, setDifficulty] = useState("medium");
  const isGameOver = useSelector((state) => state.isGameOver);
  const dispatch = useDispatch();
  const handleSelectDifficulty = (level) => {
    dispatch(levelGame(level));
    setDifficulty(level);
  };
  const handleResetGame = () => {
    dispatch(resetGame());
  };
  return (
    <div className="homepage">
      <h1 className="title">Memory Card Game</h1>
      <div className="difficulty-buttons">
        <button
          className="button"
          onClick={() => handleSelectDifficulty("easy")}
        >
          Easy
        </button>
        <button
          className="button"
          onClick={() => handleSelectDifficulty("medium")}
        >
          Medium
        </button>
        <button
          className="button"
          onClick={() => handleSelectDifficulty("hard")}
        >
          Hard
        </button>
      </div>
      {(difficulty && !isGameOver) === true ? (
        <GameBoard />
      ) : (
        <div className="modal">
          <div className="modal-content">
            <div>Start New Game</div>
            <div className="modal-buttons">
              <button onClick={handleResetGame}>Play</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
