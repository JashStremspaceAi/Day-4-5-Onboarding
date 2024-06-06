const initialState = {
  difficulty: "medium",
  difficulties: {
    easy: 4,
    medium: 8,
    hard: 16,
  },
  cards: [
    // { id: 0, value: "A", status: "hidden",isFlipped: false, isMatched: false },
    // { id: 1, value: "A", status: "hidden" , isFlipped: false, isMatched: false},
    // { id: 2, value: "B", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 3, value: "B", status: "hidden",isFlipped: false, isMatched: false },
    // { id: 4, value: "C", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 5, value: "C", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 6, value: "D", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 7, value: "D", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 8, value: "E", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 9, value: "E", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 10, value: "F", status: "hidden" ,isFlipped: false, isMatched: false},
    // { id: 11, value: 'F', status: 'hidden' ,isFlipped: false, isMatched: false},
    // Add more cards as needed
  ],
  moves: 0,
  matches: 0,
  timer: 0,
  isGameOver: false,
};

export default initialState;
