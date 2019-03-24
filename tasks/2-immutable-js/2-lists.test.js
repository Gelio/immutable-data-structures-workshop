const { List } = require('immutable');

const { addUser, removeUserById } = require('./2-lists');

describe('[ImmutableJS] 2 - Lists', () => {
  describe('addUser', () => {
    it('should return a List with one more user', () => {
      const users = List();

      const result = addUser(users, '1', 'Alice');

      expect(result.size).toBe(1);
      expect(result.find(user => user.id === '1')).toBeTruthy();
    });
  });

  describe('removeUserById', () => {
    it('should return a List without modifications if user is not found', () => {
      const users = List([
        {
          id: '1',
          name: 'Alice',
        },
      ]);

      const result = removeUserById(users, '2');

      expect(result.size).toBe(1);
    });

    it('should remove a found user', () => {
      const users = List([
        {
          id: '1',
          name: 'Alice',
        },
      ]);

      const result = removeUserById(users, '1');

      expect(result.size).toBe(0);
    });
  });
});
