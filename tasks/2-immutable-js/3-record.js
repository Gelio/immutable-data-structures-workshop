const { Record } = require('immutable');

function* recordsTask() {
  /**
   * TODO: add a new field (`age`) for `User`
   * The default value should be `null`
   */
  const User = Record({
    id: null,
    name: null,
  });

  yield User;

  /**
   * TODO: set Alice's `age` to 20
   */
  const alice = User({
    id: '1',
    name: 'Alice',
  });

  yield alice;

  yield incrementUserAge(alice);
}

/**
 *
 * @param {Record<{ id: string; name: string; age: number; }>} user
 */
function incrementUserAge(user) {
  const age = user.age;

  /**
   * TODO: increment `user.age`
   * Remember that `user` is an ImmutableJS `Record`
   */

  return user;
}

module.exports = recordsTask;
