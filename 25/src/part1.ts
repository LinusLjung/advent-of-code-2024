import { getHeights } from 'getHeights';
import { keyFits } from 'keyFits';

function parse(input: string): [number[][], number[][]] {
  return input.split('\n\n').reduce<[number[][], number[][]]>(
    ([keys, locks], schematic) => {
      const heights = getHeights(schematic);

      if (schematic[0] === '#') {
        return [keys, [...locks, heights]];
      }

      return [[...keys, heights], locks];
    },
    [[], []]
  );
}

export function part1(input: string) {
  const [keys, locks] = parse(input);
  const lockHeight = input.split('\n\n')[0].split('\n').length;

  let matches = 0;

  for (const lock of locks) {
    for (let i = 0; i < keys.length; i++) {
      if (keyFits(keys[i], lock, lockHeight)) {
        matches++;
      }
    }
  }

  return matches;
}
