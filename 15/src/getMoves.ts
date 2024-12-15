import type { Cell } from 'Grid';

export function getMoves(input: string) {
  return input
    .split('\n')
    .map((line) => line.split('').map<Cell>((move) => {
      if (move === '^') {
        return [-1, 0];
      }
      if (move === '>') {
        return [0, 1];
      }
      if (move === 'v') {
        return [1, 0];
      }

      return [0, -1];
    })
    )
    .reduce((acc, curr) => acc.concat(curr));
}
