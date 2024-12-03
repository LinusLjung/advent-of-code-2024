import { isDecreasing } from 'isDecreasing';
import { isIncreasing } from 'isIncreasing';

export function part1(input: string) {
  return input
    .split('\n')
    .map((line) => {
      const numbers = line.split(' ').map(Number);

      return isIncreasing(numbers) || isDecreasing(numbers);
    })
    .filter((line) => line).length;
}
