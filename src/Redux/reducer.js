import { FLIP_CARD, LEVEL_GAME, NEW_GAME, RESET_GAME } from "./action";
import initialState from "./initial";
const generateCards = (difficulty) => {
  const { difficulties } = initialState;
  const totalCards = difficulties[difficulty];
  const values = ["A", "B", "C", "D", "E", "F", "G", "H"]; // Example values

  const cards = [];
  for (let i = 0; i < totalCards; i++) {
    const id = i;
    const value = values[Math.floor(i / 2)]; // Pairing values
    cards.push({
      id,
      value,
      status: "hidden",
      isFlipped: false,
      isMatched: false,
      match: 0,
    });
  }

  return cards;
};
const reducer = (state = initialState, action) => {
  console.log(action);
  const { payload: difficulty } = action;
  switch (action.type) {
    case FLIP_CARD:
      const { index } = action.payload;

      const flippedCard = state.cards[index];
      console.log("index", index);
      console.log("flip", flippedCard);
      if (!flippedCard.isMatched && !flippedCard.isFlipped) {
        const updatedCards = state.cards.map((card, i) => {
          if (i === index) {
            return { ...card, isFlipped: true };
          }
          return card;
        });
        const flippedCount = updatedCards.filter(
          (card) => card.isFlipped && !card.isMatched
        ).length;
        console.log("flipCount", flippedCount);
        if (flippedCount === 2) {
          const [firstIndex, secondIndex] = updatedCards.reduce(
            (acc, card, i) => {
              if (card.isFlipped && !card.isMatched) {
                acc.push(i);
              }
              return acc;
            },
            []
          );
          if (
            updatedCards[firstIndex].value === updatedCards[secondIndex].value
          ) {
            console.log("Match");
            updatedCards[firstIndex].isMatched = true;
            updatedCards[secondIndex].isMatched = true;
            updatedCards[firstIndex].status = "unhide";
            updatedCards[secondIndex].status = "unhide";
            updatedCards[firstIndex].match = 1;
            updatedCards[secondIndex].match = 1;
          } else {
            console.log("Not Match");
            updatedCards[firstIndex].isFlipped = false;
            updatedCards[secondIndex].isFlipped = false;
          }
          console.log(updatedCards);
        }
        return {
          ...state,
          cards: updatedCards,
          moves: state.moves + 1,
        };
      }
      return state;
    case LEVEL_GAME:
      return {
        ...state,
        difficulty,
        cards: generateCards(difficulty),
      };
    case RESET_GAME:
      return {
        ...initialState,

        cards: generateCards(state.difficulty),
      };
    case NEW_GAME:
      return {
        isGameOver: true,
        cards: generateCards(difficulty),
      };
    default:
      return state;
  }
};

export default reducer;
