const { Map } = require('immutable');

const mapsTask = require('./1-maps');

describe('[ImmutableJS] 1 - Maps', () => {
  describe('state', () => {
    it('should be a Map', () => {
      const iterator = mapsTask();
      const state = iterator.next().value;

      expect(state).toBeInstanceOf(Map);
    });

    it('should have a counter property', () => {
      const iterator = mapsTask();
      const state = iterator.next().value;

      expect(state.has('counter')).toBe(true);
    });

    it('should have a counter.value property set to 0', () => {
      const iterator = mapsTask();
      const state = iterator.next().value;

      expect(state.getIn(['counter', 'value'])).toBe(0);
    });
  });

  describe('updatedState', () => {
    it('should be a Map', () => {
      const iterator = mapsTask();
      iterator.next();
      const updatedState = iterator.next().value;

      expect(updatedState).toBeInstanceOf(Map);
    });

    it('should have a counter property', () => {
      const iterator = mapsTask();
      iterator.next();
      const updatedState = iterator.next().value;

      expect(updatedState.has('counter')).toBe(true);
    });

    it('should have a counter.value property set to 1', () => {
      const iterator = mapsTask();
      iterator.next();
      const updatedState = iterator.next().value;

      expect(updatedState.getIn(['counter', 'value'])).toBe(1);
    });
  });
});
