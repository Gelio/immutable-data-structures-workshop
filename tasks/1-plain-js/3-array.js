function removeUserById(users, userId) {
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
  }

  return users;
}

function addUser(users, userId, userName) {
  users.push({
    id: userId,
    name: userName,
  });
}

module.exports = {
  removeUserById,
  addUser,
};
