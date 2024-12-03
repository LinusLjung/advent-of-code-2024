import { findMuls } from 'findMuls';
import { parseMul } from 'parseMul';

export function part1(input: string) {
  return findMuls(input)
    .map(parseMul)
    .reduce((acc, curr) => acc + curr[0] * curr[1], 0);
}
