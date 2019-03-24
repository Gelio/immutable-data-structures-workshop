const performArrayOperations = require('./4-array-operations');

describe('[plainJS] 4 - array operations', () => {
  it('should return only often accessed users', () => {
    const users = [
      {
        accessedTimes: 5,
      },
      {
        accessedTimes: 10,
      },
      {
        accessedTimes: 50,
      },
    ];

    const result = performArrayOperations(users);

    expect(result).toContainEqual({
      accessedTimes: 11,
    });
    expect(result).toContainEqual({
      accessedTimes: 51,
    });
  });

  it('should return a new array', () => {
    const users = [
      {
        accessedTimes: 5,
      },
      {
        accessedTimes: 10,
      },
      {
        accessedTimes: 50,
      },
    ];

    const result = performArrayOperations(users);

    expect(result).not.toBe(users);
  });

  it('should not modify the argument', () => {
    const users = [
      {
        accessedTimes: 5,
      },
      {
        accessedTimes: 10,
      },
      {
        accessedTimes: 50,
      },
    ];

    const usersClone = JSON.parse(JSON.stringify(users));

    performArrayOperations(users);

    expect(users).toEqual(usersClone);
  });
});
