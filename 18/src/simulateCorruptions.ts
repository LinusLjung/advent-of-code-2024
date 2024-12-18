import type { Cell } from 'Grid';
import type Grid from 'Grid';

export function simulateCorruptions(grid: Grid, corruptions: Cell[], bytes: number) {
  for (const corruption of corruptions.slice(0, bytes)) {
    grid.setCell(corruption, '#');
  }
}
