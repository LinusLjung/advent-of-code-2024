import type { Test } from 'types';

export function getTests(input: string): Test[] {
  return input.split('\n').map((line) => {
    const [testValueString, equationString] = line.split(':').map((string) => string.trim());

    return [Number(testValueString), equationString.split(' ').map(Number)];
  });
}
