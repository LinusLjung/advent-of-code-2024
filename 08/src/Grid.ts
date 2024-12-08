export type Cell = [row: number, column: number];
export type Node = { cell: Cell; type: string };

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

  findNodes() {
    let nodes: Node[] = [];

    for (let r = 0; r < this.grid.length; r++) {
      for (let c = 0; c < this.grid[0].length; c++) {
        const content = this.getCell([r, c]);

        if (content !== '.') {
          nodes.push({ cell: [r, c], type: content });
        }
      }
    }

    return nodes;
  }
}

export default Grid;
