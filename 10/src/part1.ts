import Grid, { type Cell } from 'Grid';

function getAdjecentCells(start: Cell) {
  return [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].map<Cell>(([r, c]) => [start[0] + r, start[1] + c]);
}

function walkDown(start: Cell, grid: Grid): boolean {
  const currentLevel = grid.getCell(start);

  if (currentLevel === 0) {
    return true;
  }

  const newCells = getAdjecentCells(start).filter((cell) => grid.getCell(cell) + 1 === currentLevel);

  if (!newCells.length) {
    return false;
  }

  console.log(newCells);

  return newCells.some((cell) => walkDown(cell, grid));
}

function walkUp(start: Cell, grid: Grid): Cell[] {
  const currentLevel = grid.getCell(start);

  console.log(currentLevel);

  if (currentLevel === 9) {
    console.log('peak at:', start);
    return [start];
  }

  const newCells = getAdjecentCells(start).filter((cell) => grid.getCell(cell) - 1 === currentLevel);

  if (!newCells.length) {
    return [];
  }

  console.log(newCells);

  // let sum = 0;
  let cells: Cell[] = [];

  for (const cell of newCells) {
    const peaks = walkUp(cell, grid);
    console.log('peaks', peaks);
    cells.push(...peaks);
    // sum += walkUp(cell, grid);
  }

  return cells;
}

export function part1(input: string) {
  const grid = new Grid(input);
  const heads = grid.findHeads();

  console.log('heads', heads);

  let peaks: Cell[] = [];

  for (const head of heads) {
    peaks.push(...walkUp(head, grid));
  }

  return peaks;
}
