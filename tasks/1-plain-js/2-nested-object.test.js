const updateNestedObject = require('./2-nested-object');

describe('[plainJS] 2 - nested object', () => {
  it('should update properties', () => {
    const state = {
      user: {
        name: 'Alice',
      },
      counter: {
        value: 1,
      },
    };

    const updatedState = updateNestedObject(state);

    expect(updatedState.user.name).toBe('Bob');
    expect(updatedState.counter.value).toBe(0);
  });

  it('should not modify the old object', () => {
    const state = {
      user: {
        name: 'Alice',
      },
      counter: {
        value: 1,
      },
    };

    updateNestedObject(state);

    expect(state.user.name).toBe('Alice');
    expect(state.counter.value).toBe(1);
  });

  it('should leave other pieces of state unmodified', () => {
    const state = {
      user: {
        name: 'Alice',
      },
      counter: {
        value: 1,
      },
      unrelated: {
        foo: 'bar',
      },
    };

    const updatedState = updateNestedObject(state);

    expect(updatedState.unrelated).toBe(state.unrelated);
  });
});
