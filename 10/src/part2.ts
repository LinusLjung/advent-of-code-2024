import { getAdjecentCells } from 'getAdjecentCells';
import Grid, { type Cell } from 'Grid';

function walkUp(start: Cell, grid: Grid): number {
  const currentLevel = grid.getCell(start);

  if (currentLevel === 9) {
    return 1;
  }

  const newCells = getAdjecentCells(start).filter((cell) => grid.getCell(cell) - 1 === currentLevel);

  if (!newCells.length) {
    return 0;
  }

  let count = 0;

  for (const cell of newCells) {
    count += walkUp(cell, grid);
  }

  return count;
}

export function part2(input: string) {
  const grid = new Grid(input);
  const heads = grid.findHeads();

  let sum = 0;

  for (const head of heads) {
    sum += walkUp(head, grid);
  }

  return sum;
}

