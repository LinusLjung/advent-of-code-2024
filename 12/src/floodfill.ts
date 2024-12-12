import assert from 'assert';
import { getAdjacentCells } from 'getAdjacentCells';
import type { Cell } from 'Grid';
import type Grid from 'Grid';

export function floodfill(cell: Cell, grid: Grid) {
  const currentCellContent = grid.getCell(cell);
  const area = new Set<string>();

  const queue: Cell[] = [cell];

  while (queue.length) {
    const cell = queue.pop();

    assert(cell);

    if (grid.getCell(cell) !== currentCellContent) {
      continue;
    }

    if (area.has(cell.toString())) {
      continue;
    }

    area.add(cell.toString());

    queue.push(...getAdjacentCells(cell));
  }

  return [...area].map<Cell>((area) => area.split(',').map(Number) as Cell);
}
