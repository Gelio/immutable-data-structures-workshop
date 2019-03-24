const { Map } = require('immutable');

function* mapsTask() {
  /**
   * TODO: Convert `state` to a Map with the same shape
   * NOTE: experiment with `fromJS` and `Map` constructor
   */

  const state = {
    counter: {
      value: 0,
    },
  };

  yield state;

  // TODO: Increment `state.counter.value` by 1 using ImmutableJS Map operations
  // NOTE: experiment with `set`, `setIn` and `updateIn`
  const updatedState = {
    counter: {
      value: state.counter.value + 1,
    },
  };

  yield updatedState;
}

module.exports = mapsTask;
