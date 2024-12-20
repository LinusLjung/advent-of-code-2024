import type { Cell } from 'Grid';

export function getAdjacentCells(cell: Cell) {
  return [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].map<Cell>(([r, c]) => [cell[0] + r, cell[1] + c]);
}
