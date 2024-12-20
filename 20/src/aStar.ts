import { MinHeap } from 'datastructures-js';
import { getAdjacentCells } from 'getAdjacentCells';
import type Grid from 'Grid';
import type { Cell } from 'Grid';

export type Run = {
  score: number;
  path: string[];
};

function getEstimatedDistance(start: Cell, goal: Cell) {
  const xDiff = Math.abs(start[0] - goal[0]);
  const yDiff = Math.abs(start[1] - goal[1]);

  return xDiff + yDiff;
}

function reconstructPath(cameFrom: Record<string, string>, cell: string) {
  const path: string[] = [cell];

  while (cell in cameFrom) {
    cell = cameFrom[cell.toString()];
    path.push(cell);
  }

  return path.toReversed();
}

export function aStar(start: Cell, goal: Cell, grid: Grid): Run | undefined {
  const gScore = { [start.toString()]: 0 };
  const fScore = { [start.toString()]: getEstimatedDistance(start, goal) };
  const cameFrom: Record<string, string> = {};

  const heap = new MinHeap<string>((cell) => fScore[cell] ?? Infinity);
  heap.push(start.toString());

  while (!heap.isEmpty()) {
    const currentCell = heap.pop()!;

    if (currentCell === goal.toString()) {
      return { score: gScore[currentCell], path: reconstructPath(cameFrom, currentCell) };
    }

    for (const adjacentCell of getAdjacentCells(currentCell.split(',').map(Number) as Cell)) {
      if (grid.getCell(adjacentCell) !== '.') {
        continue;
      }
      const tentativeGScore = (gScore[currentCell.toString()] ?? Infinity) + 1;

      if (tentativeGScore < (gScore[adjacentCell.toString()] ?? Infinity)) {
        cameFrom[adjacentCell.toString()] = currentCell.toString();
        gScore[adjacentCell.toString()] = tentativeGScore;
        fScore[adjacentCell.toString()] = tentativeGScore + getEstimatedDistance(adjacentCell, goal);

        if (!heap.toArray().includes(adjacentCell.toString())) {
          heap.push(adjacentCell.toString());
        }
      }
    }
  }
}
