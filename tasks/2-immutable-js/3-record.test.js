const recordsTask = require('./3-record');

describe('[ImmutableJS] 3 - Records', () => {
  describe('User Record', () => {
    it('should be a Record factory', () => {
      const iterator = recordsTask();
      const User = iterator.next().value;

      expect(typeof User).toBe('function');

      const user = User();
      expect(user.id).toBe(null);
      expect(user.name).toBe(null);
    });

    it('should have an age property', () => {
      const iterator = recordsTask();
      const User = iterator.next().value;

      const user = User();

      expect(user.age).toBe(null);
    });
  });

  describe('alice', () => {
    it('should be an instance of User', () => {
      const iterator = recordsTask();
      const User = iterator.next().value;
      const alice = iterator.next().value;

      expect(alice).toBeInstanceOf(User);
    });

    it('should have set properties', () => {
      const iterator = recordsTask();
      iterator.next().value;
      const alice = iterator.next().value;

      expect(alice.id).toBe('1');
      expect(alice.name).toBe('Alice');
      expect(alice.age).toBe(20);
    });
  });

  describe('alice with incremented age', () => {
    it('should be an instance of User', () => {
      const iterator = recordsTask();
      const User = iterator.next().value;
      iterator.next().value;
      const updatedAlice = iterator.next().value;

      expect(updatedAlice).toBeInstanceOf(User);
    });

    it('should have set properties', () => {
      const iterator = recordsTask();
      iterator.next().value;
      iterator.next().value;
      const updatedAlice = iterator.next().value;

      expect(updatedAlice.id).toBe('1');
      expect(updatedAlice.name).toBe('Alice');
      expect(updatedAlice.age).toBe(21);
    });
  });
});
