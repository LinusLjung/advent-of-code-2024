import { KEYWORD } from 'consts';

export function checkColumn(grid: string[][], rowIndex: number, columnIndex: number) {
  if (grid.length < rowIndex + KEYWORD.length) {
    return false;
  }

  let word = '';
  for (let i = 0; i < KEYWORD.length; i++) {
    word += grid[rowIndex + i][columnIndex];
  }

  return word === KEYWORD;
}

export function checkColumnReversed(grid: string[][], rowIndex: number, columnIndex: number) {
  if (rowIndex < KEYWORD.length - 1) {
    return false;
  }

  let word = '';
  for (let i = 0; i < KEYWORD.length; i++) {
    word += grid[rowIndex - i][columnIndex];
  }

  return word === KEYWORD;
}
