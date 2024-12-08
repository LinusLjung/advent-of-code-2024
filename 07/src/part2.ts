import { getTests } from 'getTests';
import { isSolvable } from 'isSolvable';

export function part2(input: string) {
  const tests = getTests(input);

  return tests.filter((test) => isSolvable(test, true)).reduce((acc, curr) => acc + curr[0], 0);
}
