import { getVisitedCells } from 'getVisitedCells';
import Grid from 'Grid';

export function part1(input: string) {
  const grid = new Grid(input);

  return getVisitedCells(grid).length;
}
