import { aStar, type Run } from 'aStar';
import { getAdjacentCells } from 'getAdjacentCells';
import Grid, { type Cell } from 'Grid';

function isEdgeCell(cell: Cell, grid: Grid) {
  if (cell[0] === 0 || cell[0] === grid.height - 1) {
    return true;
  }

  if (cell[1] === 0 || cell[1] === grid.width - 1) {
    return true;
  }

  return false;
}

const GOOD_CHEAT_THRESHOLD = 100;

export function part1(input: string) {
  const grid = new Grid(input);
  const start = [...grid].find((cell) => grid.getCell(cell) === 'S')!;
  const end = [...grid].find((cell) => grid.getCell(cell) === 'E')!;

  grid.setCell(start, '.');
  grid.setCell(end, '.');

  const normalRun = aStar(start, end, grid)!;
  const walls = new Set<string>();

  for (const cellString of normalRun.path) {
    const cell = cellString.split(',').map(Number) as Cell;
    const adjacentCells = getAdjacentCells(cell);

    for (const cell of adjacentCells) {
      if (grid.getCell(cell) === '#' && !isEdgeCell(cell, grid)) {
        walls.add(cell.toString());
      }
    }
  }

  let goodCheats: Run[] = [];

  for (const wall of [...walls].map((wall) => wall.split(',').map(Number) as Cell)) {
    grid.setCell(wall, '.');

    const run = aStar(start, end, grid)!;

    grid.setCell(wall, '#');

    if (run.score + GOOD_CHEAT_THRESHOLD <= normalRun.score) {
      goodCheats.push(run);
    }
  }

  return goodCheats.length;
}
