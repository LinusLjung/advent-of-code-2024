import { getMoves } from 'getMoves';
import Grid from 'Grid';
import { tryMove } from 'tryMove';

export function part1(input: string) {
  const [gridInput, moveInput] = input.split('\n\n');
  const grid = new Grid(gridInput);
  const moves = getMoves(moveInput);

  for (const move of moves) {
    tryMove(move, grid);
  }

  let sum = 0;
  for (const cell of grid) {
    if (grid.getCell(cell) === 'O') {
      sum += cell[0] * 100 + cell[1];
    }
  }

  return sum;
}
