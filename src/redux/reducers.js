
const initialState = {
  cards: []
};

export default function reducer(state=initialState, action) {
  let newState;
  let cards;
  switch (action.type) {
    case "MOVE_TASK":
      newState = Object.assign({}, state);
      cards = [...newState.cards];
      const {stage: stageNum} = action;
      if (cards[stageNum]) {
        const task = cards[stageNum].tasks.shift();
        if (task && cards[stageNum + 1]) {
          cards[stageNum + 1].tasks = (cards[stageNum + 1].tasks || []).concat(task);
        }
      }
      newState.cards = cards;
      return newState;

    case "CREATE_TASK":
      newState = Object.assign({}, state);
      cards = [...newState.cards];
      if (!cards[0]) {
        return state;
      }
      const { taskName: newTaskTitle } = action;
      if (!newTaskTitle) {
        return state;
      }
      cards[0].tasks = [...(cards[0].tasks || []), { title: newTaskTitle }];
      newState.cards = cards;
      return newState;

    case "CREATE_CARD":
      const { cardName: title } = action;
      if (!title) {
        return state;
      }
      return {
        cards: [
          ...state.cards,
          {
            title: title,
          }
        ]
      };


    default:
      return state;
  }
}