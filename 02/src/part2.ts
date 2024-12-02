import { hasValidLevelChanges } from 'hasValidLevelChanges';
import { isDecreasing } from 'isDecreasing';
import { isIncreasing } from 'isIncreasing';

export function part2(input: string) {
  return input
    .split('\n')
    .map((line) => {
      const numbers = line.split(' ').map(Number);

      const levelToleranceIndex = hasValidLevelChanges(numbers, true);

      return hasValidLevelChanges(numbers, true) && (isIncreasing(numbers, true) || isDecreasing(numbers, true));
    })
    .filter((line) => line).length;
}
