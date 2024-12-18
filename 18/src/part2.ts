import { aStar } from 'aStar';
import { createGrid } from 'createGrid';
import type { Cell } from 'Grid';
import { simulateCorruptions } from 'simulateCorruptions';

export function part2(input: string, gridWidth = 71, gridHeight = 71, bytes = 1024) {
  const grid = createGrid(gridWidth, gridHeight);
  const corruptions = input.split('\n').map((line) => line.split(',').map(Number) as Cell);
  simulateCorruptions(grid, corruptions, bytes);

  let path: string[] | undefined;
  let byteCounter = bytes;
  let corruptionCell: Cell | undefined;

  do {
    path = aStar([0, 0], [gridHeight - 1, gridWidth - 1], grid)?.path;

    if (!path) {
      break;
    }

    while (true) {
      corruptionCell = corruptions[byteCounter++];
      grid.setCell(corruptionCell, '#');

      if (path.includes(corruptionCell.toString())) {
        break;
      }
    }
  } while (true);

  return corruptionCell?.toString();
}
