export const FLIP_CARD = "FLIP_CARD";
export const RESET_GAME = "RESET_GAME";
export const LEVEL_GAME = "LEVEL_GAME";
export const NEW_GAME = "NEW_GAME";
export const flipCard = (index) => ({
  type: FLIP_CARD,
  payload: {
    index,
  },
});

export const levelGame = (difficulty) => ({
  type: LEVEL_GAME,
  payload: difficulty,
});
export const resetGame = () => ({
  type: RESET_GAME,
  // payload: difficulty
});
export const newGame = () => {
  return {
    type: "NEW_GAME",
  };
};
