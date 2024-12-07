import { getVisitedCells } from 'getVisitedCells';
import Grid from 'Grid';
import { tick } from 'tick';

function isLooping(grid: Grid) {
  const visitedCells = new Set<string>();

  do {
    if (visitedCells.has(grid.guard.position.toString() + grid.guard.direction)) {
      return true;
    }

    visitedCells.add(grid.guard.position.toString() + grid.guard.direction);
  } while (tick(grid));

  return false;
}

export function part2(input: string) {
  const grid = new Grid(input);

  const visitedCells = getVisitedCells(grid);

  let loopCount = 0;

  for (let i = 0; i < visitedCells.length; i++) {
    grid.resetGuard();

    if (i > 0) {
      grid.setCell(visitedCells[i - 1], '.');
    }

    grid.setCell(visitedCells[i], '#');

    if (isLooping(grid)) {
      loopCount++;
    }
  }

  return loopCount;
}
