export function hasValidLevelChanges(numbers: number[], withFailTolerance = false) {
  let didFail = false;
  let toleranceIndex = -1;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (Math.abs(numbers[i] - numbers[i + 1]) > 3) {
      if (!withFailTolerance || didFail) {
        return false;
      }

      didFail = true;
      toleranceIndex = i;
    }
  }

  return withFailTolerance ? toleranceIndex : true;
}
