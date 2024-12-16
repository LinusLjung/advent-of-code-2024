import type { Cell } from 'Grid';
import type { Direction } from 'types';

export function getAdjacentCells(start: Cell): [Cell, Direction][] {
  return [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].map<[Cell, Direction]>(([r, c]) => [
    [start[0] + r, start[1] + c],
    r === 1 ? 'v' : r === -1 ? '^' : c === 1 ? '>' : '<',
  ]);
}
