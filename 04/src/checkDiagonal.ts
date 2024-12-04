import { KEYWORD } from 'consts';

export function checkDiagonalDesc(grid: string[][], rowIndex: number, columnIndex: number, keyword = KEYWORD) {
  if (grid.length < columnIndex + keyword.length) {
    return false;
  }

  if (grid[0].length < rowIndex + keyword.length) {
    return false;
  }

  let word = '';

  for (let i = 0; i < keyword.length; i++) {
    word += grid[rowIndex + i][columnIndex + i];
  }

  return word === keyword;
}

export function checkDiagonalDescReversed(grid: string[][], rowIndex: number, columnIndex: number, keyword = KEYWORD) {
  if (rowIndex < keyword.length - 1) {
    return false;
  }

  if (columnIndex < keyword.length - 1) {
    return false;
  }

  let word = '';

  for (let i = 0; i < keyword.length; i++) {
    word += grid[rowIndex - i][columnIndex - i];
  }

  return word === keyword;
}

export function checkDiagonalAsc(grid: string[][], rowIndex: number, columnIndex: number, keyword = KEYWORD) {
  if (grid.length < columnIndex + keyword.length) {
    return false;
  }

  if (rowIndex < keyword.length - 1) {
    return false;
  }

  let word = '';

  for (let i = 0; i < keyword.length; i++) {
    word += grid[rowIndex - i][columnIndex + i];
  }

  return word === keyword;
}

export function checkDiagonalAscReversed(grid: string[][], rowIndex: number, columnIndex: number, keyword = KEYWORD) {
  if (grid[0].length < rowIndex + keyword.length) {
    return false;
  }

  if (columnIndex < keyword.length - 1) {
    return false;
  }

  let word = '';

  for (let i = 0; i < keyword.length; i++) {
    word += grid[rowIndex + i][columnIndex - i];
  }

  return word === keyword;
}
