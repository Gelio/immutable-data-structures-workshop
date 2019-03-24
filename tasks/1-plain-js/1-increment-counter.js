function incrementCounter(state) {
  return {
    ...state,
    counter: state.counter + 1,
  };
}

module.exports = incrementCounter;
