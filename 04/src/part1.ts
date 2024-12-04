import { checkColumn, checkColumnReversed } from 'checkColumn';
import {
  checkDiagonalAsc,
  checkDiagonalAscReversed,
  checkDiagonalDesc,
  checkDiagonalDescReversed,
} from 'checkDiagonal';
import { checkRow, checkRowReversed } from 'checkRow';
import { getGrid } from 'getGrid';

export function part1(input: string) {
  const grid = getGrid(input);
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] !== 'X') {
        continue;
      }

      if (checkRow(grid[r], c)) {
        count++;
      }

      if (checkRowReversed(grid[r], c)) {
        count++;
      }

      if (checkColumn(grid, r, c)) {
        count++;
      }

      if (checkColumnReversed(grid, r, c)) {
        count++;
      }

      if (checkDiagonalDesc(grid, r, c)) {
        count++;
      }

      if (checkDiagonalDescReversed(grid, r, c)) {
        count++;
      }

      if (checkDiagonalAsc(grid, r, c)) {
        count++;
      }

      if (checkDiagonalAscReversed(grid, r, c)) {
        count++;
      }
    }
  }

  return count;
}
