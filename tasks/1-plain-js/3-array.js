function removeUserById(users, userId) {
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    return [...users.slice(0, index - 1), ...users.slice(index + 1)];
  }

  return users;
}

function addUser(users, userId, userName) {
  return [
    ...users,
    {
      id: userId,
      name: userName,
    },
  ];
}

module.exports = {
  removeUserById,
  addUser,
};
