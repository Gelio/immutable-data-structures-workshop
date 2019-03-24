const { Map, fromJS } = require('immutable');

function* mapsTask() {
  /**
   * TODO: Convert `state` to a Map with the same shape
   * NOTE: experiment with `fromJS` and `Map` constructor
   */

  const state = fromJS({
    counter: {
      value: 0,
    },
  });

  const state2 = Map({
    counter: Map({
      value: 0,
    }),
  });

  yield state;

  // TODO: Increment `state.counter.value` by 1 using ImmutableJS Map operations
  // NOTE: experiment with `set`, `setIn` and `updateIn`
  const updatedState = state.updateIn(['counter', 'value'], value => value + 1);

  yield updatedState;
}

module.exports = mapsTask;
