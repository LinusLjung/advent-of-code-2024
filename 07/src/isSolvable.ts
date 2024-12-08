import type { Test } from 'types';

export function isSolvable(test: Test, withConcat = false) {
  const [target, equation] = test;

  for (let i = 0; i < Math.pow(withConcat ? 3 : 2, equation.length - 1); i++) {
    const mask = i.toString(withConcat ? 3 : 2).padStart(equation.length - 1, '0');

    const result = equation.reduce((acc, curr, j) => {
      if (mask[j - 1] === '0') {
        return acc + curr;
      }

      if (withConcat) {
        if (mask[j - 1] === '1') {
          return Number(acc + '' + curr);
        }
      }

      return acc * curr;
    });

    if (result === target) {
      return true;
    }
  }

  return false;
}
