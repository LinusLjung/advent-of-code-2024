import Grid from 'Grid';

export function createGrid(width: number, height: number) {
  let rawGrid: string[] = [];
  for (let r = 0; r < height; r++) {
    rawGrid.push('.'.repeat(width));
  }

  return new Grid(rawGrid.join('\n'));
}
