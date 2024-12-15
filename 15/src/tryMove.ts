import Grid, { type Cell } from 'Grid';

export function tryMove(move: Cell, grid: Grid) {
  const robot = grid.findRobot();
  let canMove = false;
  let cell = robot;

  while (true) {
    cell = [cell[0] + move[0], cell[1] + move[1]];
    let content = grid.getCell(cell);

    if (!content || content === '#') {
      break;
    }

    if (content === '.') {
      canMove = true;
      break;
    }
  }

  if (!canMove) {
    return;
  }

  move = [move[0] * -1, move[1] * -1];

  while (true) {
    if (cell[0] === robot[0] && cell[1] === robot[1]) {
      grid.setCell(cell, '.');
      break;
    }

    grid.setCell(cell, grid.getCell([cell[0] + move[0], cell[1] + move[1]]));

    cell = [cell[0] + move[0], cell[1] + move[1]];
  }
}
