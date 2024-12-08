import { getTests } from 'getTests';
import { isSolvable } from 'isSolvable';
import type { Test } from 'types';

export function part1(input: string) {
  const tests = getTests(input);

  return tests.filter((test) => isSolvable(test)).reduce((acc, curr) => acc + curr[0], 0);
}
