import { KEYWORD } from 'consts';

export function checkDiagonalDesc(grid: string[][], rowIndex: number, columnIndex: number) {
  if (grid.length < columnIndex + KEYWORD.length) {
    return false;
  }

  if (grid[0].length < rowIndex + KEYWORD.length) {
    return false;
  }

  let word = '';

  for (let i = 0; i < KEYWORD.length; i++) {
    word += grid[rowIndex + i][columnIndex + i];
  }

  return word === KEYWORD;
}

export function checkDiagonalDescReversed(grid: string[][], rowIndex: number, columnIndex: number) {
  if (rowIndex < KEYWORD.length - 1) {
    return false;
  }

  if (columnIndex < KEYWORD.length - 1) {
    return false;
  }

  let word = '';

  for (let i = 0; i < KEYWORD.length; i++) {
    word += grid[rowIndex - i][columnIndex - i];
  }

  return word === KEYWORD;
}

export function checkDiagonalAsc(grid: string[][], rowIndex: number, columnIndex: number) {
  if (grid.length < columnIndex + KEYWORD.length) {
    return false;
  }

  if (rowIndex < KEYWORD.length - 1) {
    return false;
  }

  let word = '';

  for (let i = 0; i < KEYWORD.length; i++) {
    word += grid[rowIndex - i][columnIndex + i];
  }

  return word === KEYWORD;
}

export function checkDiagonalAscReversed(grid: string[][], rowIndex: number, columnIndex: number) {
  if (grid[0].length < rowIndex + KEYWORD.length) {
    return false;
  }

  if (columnIndex < KEYWORD.length - 1) {
    return false;
  }

  let word = '';

  for (let i = 0; i < KEYWORD.length; i++) {
    word += grid[rowIndex + i][columnIndex - i];
  }

  return word === KEYWORD;
}
