import { fizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz Tests', () => {
  describe('Default behaviour', () => {
    it('should return 1 when sending 1', () => {
      expect(fizzBuzz(1)).toBe('1');
    });
  });
});
