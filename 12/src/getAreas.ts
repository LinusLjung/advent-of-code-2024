import { floodfill } from 'floodfill';
import type { Cell } from 'Grid';
import type Grid from 'Grid';

export function getAreas(grid: Grid) {
  const seen = new Set<string>();
  const areas: Cell[][] = [];

  for (const cell of grid) {
    if (seen.has(cell.toString())) {
      continue;
    }

    const area = floodfill(cell, grid);

    for (const cell of area) {
      seen.add(cell.toString());
    }

    areas.push(area);
  }

  return areas;
}
