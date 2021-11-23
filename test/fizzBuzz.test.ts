import { fizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz Tests', () => {
  describe('Default behaviour', () => {
    it('should return 1 when sending 1', () => {
      expect(fizzBuzz(1)).toBe('1');
    });
  });

  describe('Special case for numbers divisible by 3', () => {
    it('should return Fizz when sending 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });
  });

  describe('Special case for numbers divisible by 5', () => {
    it('should return Buzz when sending 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });
  });

  describe('Special case for numbers divisible by 15 (3 and 5)', () => {
    it('should return FizzBuzz when sending 15', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
  });
});
