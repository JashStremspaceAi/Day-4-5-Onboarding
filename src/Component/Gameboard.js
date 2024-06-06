import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, newGame } from "../Redux/action";
import Card from "./Card";
import "./style.css";
import Timer from "./Timer";
const GameBoard = () => {
  const cards = useSelector((state) => state.cards);
  const moves = useSelector((state) => state.moves);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetGame());
  };
  const handleGame = () => {
    dispatch(newGame());
  };
  return (
    <>
      <div>Moves : {moves}
      <Timer />
      </div>
      <br />
      <div className="game-board">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div>
        <button className=" btn btn-primary" onClick={handleGame}>
          New Game
        </button>{" "}
        <span />
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default GameBoard;
