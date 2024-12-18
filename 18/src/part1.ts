import { aStar } from 'aStar';
import { createGrid } from 'createGrid';
import type { Cell } from 'Grid';
import { simulateCorruptions } from 'simulateCorruptions';

export function part1(input: string, gridWidth = 71, gridHeight = 71, bytes = 1024) {
  const corruptions = input.split('\n').map((line) => line.split(',').toReversed().map(Number) as Cell);
  const grid = createGrid(gridWidth, gridHeight);

  simulateCorruptions(grid, corruptions, bytes);

  return aStar([0, 0], [gridHeight - 1, gridWidth - 1], grid)?.score;
}
