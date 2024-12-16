import assert from 'assert';
import Grid from 'Grid';
import { pathfind } from 'pathfind';

export function part1(input: string) {
  const grid = new Grid(input);
  const winners = pathfind({ position: grid.findStart(), path: [], direction: '>', cost: 0 }, grid.findGoal(), grid);

  return winners[0].cost;
}
