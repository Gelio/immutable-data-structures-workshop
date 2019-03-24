const { List } = require('immutable');

/**
 * TODO: fix a bug
 *
 * @param {List<{ id: string; name: string; }>} users
 * @param {string} userId
 * @returns {List<{ id: string; name: string; }>}
 */
function removeUserById(users, userId) {
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
  }

  return users;
}

/**
 * TODO: fix a bug
 *
 * @param {List<{ id: string; name: string; }>} users
 * @param {string} userId
 * @param {string} userName
 * @returns {List<{ id: string; name: string; }>}
 */
function addUser(users, userId, userName) {
  users.push({
    id: userId,
    name: userName,
  });
}

/**
 * NOTE: notice that `List` is immutable (from ImmutableJS), but can contain plain JS objects
 */

module.exports = {
  removeUserById,
  addUser,
};
