function updateNestedObject(state) {
  state.user.name = 'Bob';
  state.counter.value--;

  return state;
}

module.exports = updateNestedObject;
