import Grid from 'Grid';
import { pathfind } from 'pathfind';

export function part2(input: string) {
  const grid = new Grid(input);
  const winners = pathfind(
    { position: grid.findStart(), path: [], direction: '>', prevDirection: '>', cost: 0 },
    grid.findGoal(),
    grid
  );

  const cells = winners.reduce(
    (acc, curr) => acc.union(new Set(curr.path.map((cell) => cell.toString()))),
    new Set<string>()
  );

  return cells.size;
}
