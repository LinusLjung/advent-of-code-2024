import { getAdjacentCells } from 'getAdjacentCells';
import Grid, { type Cell } from 'Grid';
import type { Reindeer } from 'types';

function pathfind(
  from: Cell,
  to: Cell,
  grid: Grid,
  path: string[],
  direction: '^' | '>' | 'v' | '<' = '>',
  points = 0
) {
  path = path.concat(from.toString());
  console.log(path.length);
  if (from.toString() === to.toString()) {
    console.log('success', path);
    return [path, points];
  }

  for (const [cell, direction] of getAdjacentCells(from)) {
    if (grid.getCell(cell) === '#') {
      continue;
    }

    if (path.includes(cell.toString())) {
      continue;
    }

    pathfind(cell, to, grid, path);
  }
}

function pathfind2(from: Reindeer, to: Cell, grid: Grid) {
  const queue: Reindeer[] = [from];

  const winners: Reindeer[] = [];

  while (queue.length) {
    console.log(queue.length, winners.length);
    const cell = queue.shift()!;

    for (const [adjacentCell, direction] of getAdjacentCells(cell.position)) {
      if (grid.getCell(adjacentCell) === '#') {
        continue;
      }

      if (cell.path.includes(adjacentCell.toString())) {
        continue;
      }

      const newCell: Reindeer = {
        position: adjacentCell,
        path: cell.path.concat(adjacentCell.toString()),
        direction,
        cost: cell.cost + 1 + direction === cell.direction ? 0 : 1000,
      };

      if (adjacentCell.toString() === to.toString()) {
        winners.push(newCell);
        continue;
      }

      queue.push(newCell);
    }
  }

  console.log('winners', winners);
}

export function part1(input: string) {
  const grid = new Grid(input);

  grid.print();

  // pathfind(grid.findStart(), grid.findGoal(), grid, []);
  pathfind2({ position: grid.findStart(), path: [], direction: '>', cost: 0 }, grid.findGoal(), grid);
}
