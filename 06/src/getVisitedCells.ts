import type Grid from 'Grid';
import { tick } from 'tick';
import type { Cell } from 'types';

export function getVisitedCells(grid: Grid) {
  const visitedCells = new Set<string>();

  do {
    visitedCells.add(grid.guard.position.toString());
  } while (tick(grid));

  return [...visitedCells].map((cell) => cell.split(',').map(Number)) as Cell[];
}
