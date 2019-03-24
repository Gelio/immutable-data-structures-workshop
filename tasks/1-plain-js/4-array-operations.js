// NOTE: tricky

function getOftenAccessedUsers(users) {
  return users.filter(user => user.accessedTimes > 10);
}

function accessUsers(users) {
  return users.map(user => ({
    ...user,
    accessedTimes: user.accessedTimes + 1,
  }));
}

function performArrayOperations(users) {
  const accessedUsers = accessUsers(users);
  return getOftenAccessedUsers(accessedUsers);
}

module.exports = performArrayOperations;
