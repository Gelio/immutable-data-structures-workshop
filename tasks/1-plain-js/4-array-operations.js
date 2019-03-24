// NOTE: tricky

function getOftenAccessedUsers(users) {
  return users.filter(user => user.accessedTimes > 10);
}

function accessUsers(users) {
  users.forEach(user => {
    user.accessedTimes++;
  });
}

function performArrayOperations(users) {
  /**
   * TODO:
   * 1. Access each user using `accessUsers`
   * 2. Return only often accessed users (the result of `getOftenAccessedUsers`)
   *
   * Verify that both functions above do not perform directm mutations (are immutable)
   */

  return users;
}

module.exports = performArrayOperations;
