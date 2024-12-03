import { isDecreasing } from 'isDecreasing';
import { isIncreasing } from 'isIncreasing';

export function part2(input: string) {
  return input
    .split('\n')
    .map((line) => {
      const numbers = line.split(' ').map(Number);

      return isIncreasing(numbers, true) || isDecreasing(numbers, true);
    })
    .filter((line) => line).length;
}
