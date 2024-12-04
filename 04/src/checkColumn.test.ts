import { describe, expect, it } from 'bun:test';
import { checkColumn, checkColumnReversed } from 'checkColumn';

const TEST_GRID = [
  ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
  ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
  ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
  ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
  ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
  ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
  ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
  ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
  ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
  ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X'],
];

describe('checkColumn()', () => {
  it.each([[3, 9]])('should return true if column has the keyword at index', (row, column) => {
    expect(checkColumn(TEST_GRID, row, column)).toBeTrue();
  });

  it.each([
    [2, 9],
    [2, 10],
    [5, 0],
    [7, 0],
    [4, 6],
    [9, 9],
  ])('should return false if column does not have the keyword at %d,%d', (row, column) => {
    expect(checkColumn(TEST_GRID, row, column)).toBeFalse();
  });
});

describe('checkColumnReversed()', () => {
  it.each([
    [4, 6],
    [9, 9],
  ])('should return true if column has the reversed keyword at %d,%d', (row, column) => {
    expect(checkColumnReversed(TEST_GRID, row, column)).toBeTrue();
  });

  it.each([
    [3, 9],
    [2, 9],
    [2, 10],
    [5, 0],
    [7, 0],
  ])('should return false if column does not have the reversed keyword at index', (row, column) => {
    expect(checkColumnReversed(TEST_GRID, row, column)).toBeFalse();
  });
});
