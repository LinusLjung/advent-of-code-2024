import { getAreas } from 'getAreas';
import Grid, { type Cell } from 'Grid';

function isTopCell(cell: Cell, grid: Grid) {
  return grid.getCell([cell[0] - 1, cell[1]]) !== grid.getCell(cell);
}

function isBottomCell(cell: Cell, grid: Grid) {
  return grid.getCell([cell[0] + 1, cell[1]]) !== grid.getCell(cell);
}

function isRightCell(cell: Cell, grid: Grid) {
  return grid.getCell([cell[0], cell[1] + 1]) !== grid.getCell(cell);
}

function isLeftCell(cell: Cell, grid: Grid) {
  return grid.getCell([cell[0], cell[1] - 1]) !== grid.getCell(cell);
}

function getEdgeCount(
  area: Cell[],
  grid: Grid,
  isEdgeCell: (cell: Cell) => boolean,
  getPrevCell: (cell: Cell) => Cell,
  getNextCell: (cell: Cell) => Cell
) {
  let seen = new Set<string>();
  let sum = 0;

  for (const cell of area) {
    if (!isEdgeCell(cell) || seen.has(cell.toString())) {
      continue;
    }

    seen.add(cell.toString());
    sum++;

    let adjacentCell = getPrevCell(cell);
    while (grid.getCell(adjacentCell) === grid.getCell(cell) && isEdgeCell(adjacentCell)) {
      seen.add(adjacentCell.toString());
      adjacentCell = getPrevCell(adjacentCell);
    }

    adjacentCell = getNextCell(cell);
    while (grid.getCell(adjacentCell) === grid.getCell(cell) && isEdgeCell(adjacentCell)) {
      seen.add(adjacentCell.toString());
      adjacentCell = getNextCell(adjacentCell);
    }
  }

  return sum;
}

function getTopEdgeCount(area: Cell[], grid: Grid) {
  return getEdgeCount(
    area,
    grid,
    (cell) => isTopCell(cell, grid),
    (cell) => [cell[0], cell[1] - 1],
    (cell) => [cell[0], cell[1] + 1]
  );
}

function getBottomEdgeCount(area: Cell[], grid: Grid) {
  return getEdgeCount(
    area,
    grid,
    (cell) => isBottomCell(cell, grid),
    (cell) => [cell[0], cell[1] - 1],
    (cell) => [cell[0], cell[1] + 1]
  );
}

function getRightEdgeCount(area: Cell[], grid: Grid) {
  return getEdgeCount(
    area,
    grid,
    (cell) => isRightCell(cell, grid),
    (cell) => [cell[0] - 1, cell[1]],
    (cell) => [cell[0] + 1, cell[1]]
  );
}

function getLeftEdgeCount(area: Cell[], grid: Grid) {
  return getEdgeCount(
    area,
    grid,
    (cell) => isLeftCell(cell, grid),
    (cell) => [cell[0] - 1, cell[1]],
    (cell) => [cell[0] + 1, cell[1]]
  );
}

export function part2(input: string) {
  const grid = new Grid(input);
  const areas = getAreas(grid);

  let sum = 0;

  for (const area of areas) {
    sum +=
      area.length *
      (getTopEdgeCount(area, grid) +
        getBottomEdgeCount(area, grid) +
        getRightEdgeCount(area, grid) +
        getLeftEdgeCount(area, grid));
  }

  return sum;
}
