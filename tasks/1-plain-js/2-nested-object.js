function updateNestedObject(state) {
  return {
    ...state,
    user: {
      ...state.user,
      name: 'Bob',
    },
    counter: {
      ...state.counter,
      value: state.counter.value - 1,
    },
  };
}

module.exports = updateNestedObject;
