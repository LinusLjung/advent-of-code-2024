export type Cell = [row: number, column: number];

class Grid {
  grid: number[][];

  constructor(input: string) {
    this.grid = input.split('\n').map((row) => row.split('').map(Number));
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

  findHeads() {
    let heads: Cell[] = [];

    for (let r = 0; r < this.grid.length; r++) {
      for (let c = 0; c < this.grid[0].length; c++) {
        const content = this.getCell([r, c]);

        if (content === 0) {
          heads.push([r, c]);
        }
      }
    }

    return heads;
  }

  findPeaks() {
    let heads: Cell[] = [];

    for (let r = 0; r < this.grid.length; r++) {
      for (let c = 0; c < this.grid[0].length; c++) {
        const content = this.getCell([r, c]);

        if (content === 9) {
          heads.push([r, c]);
        }
      }
    }

    return heads;
  }
}

export default Grid;
