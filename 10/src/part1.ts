import { getAdjecentCells } from 'getAdjecentCells';
import Grid, { type Cell } from 'Grid';

function walkUp(start: Cell, grid: Grid): Cell[] {
  const currentLevel = grid.getCell(start);

  if (currentLevel === 9) {
    return [start];
  }

  const newCells = getAdjecentCells(start).filter((cell) => grid.getCell(cell) - 1 === currentLevel);

  if (!newCells.length) {
    return [];
  }

  let cells = new Set<string>();

  for (const cell of newCells) {
    const peaks = walkUp(cell, grid);

    for (const peak of peaks) {
      cells.add(peak.toString());
    }
  }

  return [...cells].map<Cell>((value) => value.split(',').map(Number) as Cell);
}

export function part1(input: string) {
  const grid = new Grid(input);
  const heads = grid.findHeads();

  let sum = 0;

  for (const head of heads) {
    sum += walkUp(head, grid).length;
  }

  return sum;
}
