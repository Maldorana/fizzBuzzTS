import { fizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz Tests', () => {
  describe('Default behaviour', () => {
    it('should return 1 when sending 1', () => {
      expect(fizzBuzz(1)).toBe('1');
    });
    it('should return 2 when sending 2', () => {
      expect(fizzBuzz(2)).toBe('2');
    });
    it('should return 4 when sending 4', () => {
      expect(fizzBuzz(4)).toBe('4');
    });
  });

  describe('Special case for numbers divisible by 3', () => {
    it('should return Fizz when sending 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('should return Fizz when sending 6', () => {
      expect(fizzBuzz(6)).toBe('Fizz');
    });
    it('should return Fizz when sending 9', () => {
      expect(fizzBuzz(9)).toBe('Fizz');
    });
  });

  describe('Special case for numbers divisible by 5', () => {
    it('should return Buzz when sending 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });
  });
});
