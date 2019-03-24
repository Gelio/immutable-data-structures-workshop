const { Record } = require('immutable');

function* recordsTask() {
  /**
   * TODO: add a new field (`age`) for `User`
   * The default value should be `null`
   */
  const User = Record({
    id: null,
    name: null,
    age: null,
  });

  yield User;

  /**
   * TODO: set Alice's `age` to 20
   */
  const alice = User({
    id: '1',
    name: 'Alice',
    age: 20,
  });

  yield alice;

  yield incrementUserAge(alice);
}

/**
 *
 * @param {Record<{ id: string; name: string; age: number; }>} user
 */
function incrementUserAge(user) {
  return user.update('age', age => age + 1);
}

module.exports = recordsTask;
