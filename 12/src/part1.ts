import { getAdjacentCells } from 'getAdjacentCells';
import { getAreas } from 'getAreas';
import Grid, { type Cell } from 'Grid';

function getNumberOfEdges(cell: Cell, grid: Grid) {
  const cellContent = grid.getCell(cell);
  let sum = 0;

  for (const adjacentCell of getAdjacentCells(cell)) {
    const content = grid.getCell(adjacentCell);

    if (content !== cellContent) {
      sum++;
    }
  }

  return sum;
}

function getPerimeterLength(area: Cell[], grid: Grid) {
  return area.reduce((acc, curr) => {
    return acc + getNumberOfEdges(curr, grid);
  }, 0);
}

export function part1(input: string) {
  const grid = new Grid(input);
  const areas = getAreas(grid);

  let sum = 0;

  for (const area of areas) {
    sum += area.length * getPerimeterLength(area, grid);
  }

  return sum;
}
