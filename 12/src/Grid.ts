export type Cell = [row: number, column: number];

class Grid {
  grid: string[][];

  constructor(input: string) {
    this.grid = input.split('\n').map((row) => row.split(''));
  }

  get width() {
    return this.grid[0].length;
  }

  get height() {
    return this.grid.length;
  }

  getCell([row, column]: Cell) {
    return this.grid[row]?.[column];
  }

  *[Symbol.iterator](): IterableIterator<Cell> {
    for (let r = 0; r < this.height; r++) {
      for (let c = 0; c < this.width; c++) {
        yield [r, c];
      }
    }
  }
}

export default Grid;
