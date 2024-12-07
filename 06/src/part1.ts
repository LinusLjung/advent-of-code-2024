import Grid, { type Cell } from 'Grid';

export function part1(input: string) {
  const grid = new Grid(input);

  const visitedCells: Cell[] = [];

  while (true) {
    if (!visitedCells.some((cell) => cell.toString() === grid.guard.position.toString())) {
      visitedCells.push(grid.guard.position);
    }

    const move = [0, 0];
    if (grid.guard.direction === '^') {
      move[0] = -1;
    }

    if (grid.guard.direction === '>') {
      move[1] = 1;
    }

    if (grid.guard.direction === 'v') {
      move[0] = 1;
    }

    if (grid.guard.direction === '<') {
      move[1] = -1;
    }

    const nextCell = [grid.guard.position[0] + move[0], grid.guard.position[1] + move[1]] as [number, number];
    const nextCellContent = grid.getCell(nextCell);

    if (nextCellContent === '.') {
      grid.moveGuard(nextCell);
      continue;
    }

    if (nextCellContent === '#') {
      grid.rotateGuard();
      continue;
    }

    break;
  }

  return visitedCells.length;
}
