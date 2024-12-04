function getGrid(input: string): string[][] {
  return input.split('\n').map((row) => row.split(''));
}

export function part1(input: string) {
  const grid = getGrid(input);

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      console.log(grid[r][c]);
    }
  }

  return grid;
}
