const actions = {
  MOVE_TASK: (stageNumber) => ({ type: "MOVE_TASK", stage: stageNumber}),
  CREATE_TASK: (taskName) => ({ type: "CREATE_TASK", taskName }),
  CREATE_CARD: (cardName) => ({ type: "CREATE_CARD", cardName }),
};

export default actions;