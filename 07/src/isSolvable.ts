import type { Test } from 'types';

export function isSolvable(test: Test) {
  const [target, equation] = test;

  for (let i = 0; i < Math.pow(2, equation.length - 1); i++) {
    const mask = i.toString(2).padStart(equation.length - 1, '0');

    const result = equation.reduce((acc, curr, j) => {
      if (mask[j - 1] === '0') {
        return acc + curr;
      }

      return acc * curr;
    });

    if (result === target) {
      return true;
    }
  }

  return false;
}
