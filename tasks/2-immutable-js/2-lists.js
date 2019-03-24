const { List } = require('immutable');

/**
 *
 * @param {List<{ id: string; name: string; }>} users
 * @param {string} userId
 * @returns {List<{ id: string; name: string; }>}
 */
function removeUserById(users, userId) {
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    return users.splice(index, 1);
  }

  return users;
}

/**
 *
 * @param {List<{ id: string; name: string; }>} users
 * @param {string} userId
 * @param {string} userName
 * @returns {List<{ id: string; name: string; }>}
 */
function addUser(users, userId, userName) {
  return users.push({
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
