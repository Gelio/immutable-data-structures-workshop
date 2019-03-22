const incrementCounter = require('./1-increment-counter');

describe('[plainJS] 1 - increment counter', () => {
  it('should return an object with incremented counter for initial value of 1', () => {
    const state = {
      counter: 1,
    };

    expect(incrementCounter(state).state).toBe(2);
  });

  it('should return an object with incremented counter for initial value of 2', () => {
    const state = {
      counter: 2,
    };

    expect(incrementCounter(state).state).toBe(3);
  });

  it('should return an object with incremented counter for initial value of 2', () => {
    const state = {
      counter: 2,
    };

    expect(incrementCounter(state).state).toBe(3);
  });

  it('should not modify the initial state', () => {
    const state = {
      counter: 1,
    };

    incrementCounter(state);
    expect(state.counter).toBe(1);
  });
});

