import React from "react";
import { useDispatch } from "react-redux";
import { flipCard } from "../Redux/action";
import "./card.css";
const Card = ({ card }) => {
  const dispatch = useDispatch();
  const handleFlip = () => {
    dispatch(flipCard(card.id));
  };
  const cardFront = "";
  let cardBack = card.value;

  return (
    <div className="container">
      {card.status === "hidden" ? (
        <div className={`flip-card ${card.isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-content">{cardFront}</div>
              <button className="flip-button" onClick={handleFlip}>
                Flip
              </button>
            </div>
            <div className="flip-card-back">
              <div className="card-content">{cardBack}</div>
              {/* <button
                    className="flip-button"
                    onClick={handleClick}
                >
                    Flip
                </button> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
