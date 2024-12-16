import assert from "assert";

export type Cell = [row: number, column: number];

class Grid<T = string> {
  grid: T[][];

  constructor(input: string) {
    this.grid = input.split('\n').map((row) => row.split('')) as T[][];
  }

  get width() {
    return this.grid[0].length;
  }

  get height() {
    return this.grid.length;
  }

  findStart() {
    for (const cell of this) {
      if (this.getCell(cell) === 'S') {
        return cell;
      }
    }
    
    assert(false);
  }

  findGoal() {
    for (const cell of this) {
      if (this.getCell(cell) === 'E') {
        return cell;
      }
    }
    
    assert(false);
  }

  getCell([row, column]: Cell) {
    return this.grid[row]?.[column];
  }

  setCell([row, column]: Cell, value: T) {
    this.grid[row][column] = value;
  }

  print() {
    for (const row of this.grid) {
      console.log(row.join(''));
    }
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
