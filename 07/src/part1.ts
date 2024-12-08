import { isSolvable } from 'isSolvable';
import type { Test } from 'types';

export function part1(input: string) {
  const tests: Test[] = input.split('\n').map((line) => {
    const [testValueString, equationString] = line.split(':').map((string) => string.trim());

    return [Number(testValueString), equationString.split(' ').map(Number)];
  });

  return tests.filter((test) => isSolvable(test)).reduce((acc, curr) => acc + curr[0], 0);
}
