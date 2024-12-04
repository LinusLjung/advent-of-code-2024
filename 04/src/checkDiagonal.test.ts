import { describe, expect, it } from 'bun:test';
import {
  checkDiagonalAsc,
  checkDiagonalAscReversed,
  checkDiagonalDesc,
  checkDiagonalDescReversed,
} from 'checkDiagonal';

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

describe('checkDiagonalDesc()', () => {
  it.each([[0, 4]])('should return true if diagonal has the keyword at %d,%d', (row, column) => {
    expect(checkDiagonalDesc(TEST_GRID, row, column)).toBeTrue();
  });

  it.each([
    [0, 0],
    [0, 5],
    [4, 0],
    [9, 9],
  ])('should return false if diagonal does not have the keyword at %d,%d', (row, column) => {
    expect(checkDiagonalDesc(TEST_GRID, row, column)).toBeFalse();
  });
});

describe('checkDiagonalDescReversed()', () => {
  it.each([
    [9, 9],
    [9, 5],
    [9, 3],
    [5, 6],
  ])('should return true if diagonal has the reversed keyword at %d,%d', (row, column) => {
    expect(checkDiagonalDescReversed(TEST_GRID, row, column)).toBeTrue();
  });

  it.each([
    [0, 4],
    [5, 5],
    [4, 5],
    [9, 8],
    [8, 9],
  ])('should return false if diagonal does not have the reversed keyword at %d,%d', (row, column) => {
    expect(checkDiagonalDescReversed(TEST_GRID, row, column)).toBeFalse();
  });
});

describe('checkDiagonalAsc()', () => {
  it.each([
    [5, 0],
    [9, 1],
  ])('should return true if diagonal has the keyword at %d,%d', (row, column) => {
    expect(checkDiagonalAsc(TEST_GRID, row, column)).toBeTrue();
  });

  it.each([
    [0, 0],
    [0, 5],
    [4, 0],
    [9, 9],
  ])('should return false if diagonal does not have the keyword at %d,%d', (row, column) => {
    expect(checkDiagonalAsc(TEST_GRID, row, column)).toBeFalse();
  });
});

describe('checkDiagonalAscReversed()', () => {
  it.each([[3, 9]])('should return true if diagonal has the keyword at %d,%d', (row, column) => {
    expect(checkDiagonalAscReversed(TEST_GRID, row, column)).toBeTrue();
  });

  it.each([
    [0, 0],
    [0, 5],
    [4, 0],
    [9, 9],
  ])('should return false if diagonal does not have the keyword at %d,%d', (row, column) => {
    expect(checkDiagonalAscReversed(TEST_GRID, row, column)).toBeFalse();
  });
});
