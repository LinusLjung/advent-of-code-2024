import assert from 'assert';
export type Cell = [row: number, column: number];

const directions = ['^', '>', 'v', '<'] as const;

type Direction = (typeof directions)[number];

class Grid {
  grid: string[][];
  guard: {
    position: Cell;
    direction: Direction;
  };

  constructor(input: string) {
    this.grid = input.split('\n').map((row) => row.split(''));

    const guardPosition = this.findGuard();

    this.guard = {
      direction: this.getCell(guardPosition) as Direction,
      position: guardPosition,
    };
  }

  findGuard(): Cell {
    for (let r = 0; r < this.grid.length; r++) {
      for (let c = 0; c < this.grid[0].length; c++) {
        const cell = this.grid[r][c];

        if ((directions as unknown as string[]).includes(cell)) {
          return [r, c];
        }
      }
    }

    assert(false);
  }

  rotateGuard() {
    this.guard.direction = directions[(directions.indexOf(this.guard.direction) + 1) % directions.length];
  }

  moveGuard(cell: Cell) {
    this.setCell(this.guard.position, '.');
    this.setCell(cell, this.guard.direction);
    this.guard.position = cell;
  }

  getCell([row, column]: Cell) {
    return this.grid[row]?.[column];
  }

  setCell([row, column]: Cell, value: string) {
    this.grid[row][column] = value;
  }
}

export default Grid;
