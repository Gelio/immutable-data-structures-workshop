const { addUser, removeUserById } = require('./3-array');

describe('[plainJS] 3 - array', () => {
  describe('addUser', () => {
    it('should add the user', () => {
      const users = [];

      const updatedUsers = addUser(users, 1, 'Alice');

      expect(updatedUsers).toContainEqual({
        id: 1,
        name: 'Alice',
      });
    });

    it('should not modify the existing array', () => {
      const users = [];

      addUser(users, 1, 'Alice');

      expect(users.length).toBe(0);
    });
  });

  describe('removeUserById', () => {
    it('should remove the user if found', () => {
      const users = [
        {
          id: 1,
          name: 'Alice',
        },
      ];

      const updatedUsers = removeUserById(users, 1);

      expect(updatedUsers.length).toBe(0);
    });

    it('should leave the array intact if user not found', () => {
      const users = [];

      const updatedUsers = removeUserById(users, 1);

      expect(updatedUsers.length).toBe(0);
      expect(users).toBe(updatedUsers);
    });

    it('should not modify the initial array', () => {
      const users = [
        {
          id: 1,
          name: 'Alice',
        },
      ];

      removeUserById(users, 1);

      expect(users.length).toBe(1);
    });
  });
});
