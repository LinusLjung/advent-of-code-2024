import type Grid from 'Grid';

export function tick(grid: Grid) {
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
    return true;
  }

  if (nextCellContent === '#') {
    grid.rotateGuard();
    return true;
  }

  return false;
}
