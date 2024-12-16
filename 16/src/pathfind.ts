import { getAdjacentCells } from 'getAdjacentCells';
import type Grid from 'Grid';
import type { Cell } from 'Grid';
import type { Reindeer } from 'types';

export function pathfind(from: Reindeer, to: Cell, grid: Grid) {
  const queue: Reindeer[] = [from];
  const visited = new Map<string, number>();

  let best: Reindeer | null = null;

  while (queue.length) {
    const cell = queue.pop()!;

    if (grid.getCell(cell.position) === '#') {
      continue;
    }

    if (best && best.cost < cell.cost) {
      continue;
    }

    if ((visited.get(cell.position.toString()) ?? Infinity) < cell.cost) {
      continue;
    }

    if (cell.path.includes(cell.position.toString())) {
      continue;
    }

    visited.set(cell.position.toString(), cell.cost);

    if (cell.position.toString() === to.toString()) {
      if (!best || best.cost > cell.cost) {
        best = cell;
      }
    }

    cell.path.push(cell.position.toString());

    for (const [adjacentCell, direction] of getAdjacentCells(cell.position)) {
      const newCell: Reindeer = {
        position: adjacentCell,
        path: cell.path.slice(),
        direction,
        cost: cell.cost + 1 + (direction === cell.direction ? 0 : 1000),
      };

      queue.push(newCell);
    }
  }

  return best;
}
