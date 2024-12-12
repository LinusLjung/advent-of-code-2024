import type { Cell } from 'Grid';

export function getAdjacentCells(start: Cell) {
  return [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].map<Cell>(([r, c]) => [start[0] + r, start[1] + c]);
}

