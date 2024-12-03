import { isValidLevelChange } from 'isValidLevelChange';

export function isDecreasing(numbers: number[], withFailTolerance = false) {
  let didFail = !withFailTolerance;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] <= numbers[i + 1] || !isValidLevelChange(numbers[i], numbers[i + 1])) {
      if (didFail) {
        return false;
      }

      let newArr = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
      if (isDecreasing(newArr, false)) {
        numbers = newArr;
        didFail = true;
        i--;
        continue;
      }

      newArr = [...numbers.slice(0, i + 1), ...numbers.slice(i + 2)];
      if (isDecreasing(newArr, false)) {
        numbers = newArr;
        didFail = true;
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}
