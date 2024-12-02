export function hasValidLevelChanges(numbers: number[]) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (Math.abs(numbers[i] - numbers[i + 1]) > 3) {
      return false;
    }
  }

  return true;
}
