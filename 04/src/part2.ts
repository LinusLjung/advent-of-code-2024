import {
  checkDiagonalAsc,
  checkDiagonalAscReversed,
  checkDiagonalDesc,
  checkDiagonalDescReversed,
} from 'checkDiagonal';
import { getGrid } from 'getGrid';

const KEYWORD = 'MAS';

export function part2(input: string) {
  const grid = getGrid(input);
  let count = 0;
  let coordCount: Record<string, number> = {};

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] !== KEYWORD[0]) {
        continue;
      }

      if (checkDiagonalDesc(grid, r, c, KEYWORD)) {
        const key = `${r + 1},${c + 1}`;
        coordCount[key] ??= 0;
        coordCount[key]++;
      }

      if (checkDiagonalDescReversed(grid, r, c, KEYWORD)) {
        const key = `${r - 1},${c - 1}`;
        coordCount[key] ??= 0;
        coordCount[key]++;
      }

      if (checkDiagonalAsc(grid, r, c, KEYWORD)) {
        const key = `${r - 1},${c + 1}`;
        coordCount[key] ??= 0;
        coordCount[key]++;
      }

      if (checkDiagonalAscReversed(grid, r, c, KEYWORD)) {
        const key = `${r + 1},${c - 1}`;
        coordCount[key] ??= 0;
        coordCount[key]++;
      }
    }
  }

  return Object.values(coordCount).filter((count) => count === 2).length;
}
