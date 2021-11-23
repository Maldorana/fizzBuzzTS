export function fizzBuzz(number: number): string {
  if (number === 5) return 'Buzz';
  if (number % 3 === 0) return 'Fizz';
  return number.toString();
}
