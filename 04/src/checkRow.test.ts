import { describe, expect, it } from 'bun:test';
import { checkRow, checkRowReversed } from 'checkRow';

describe('checkRow()', () => {
  it.each([
    [['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'], 5],
    [['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'], 0],
    [['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X'], 5],
  ])('should return true if row has the keyword at index', (row, index) => {
    expect(checkRow(row, index)).toBeTrue();
  });

  it.each([
    [['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'], 4],
    [['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'], 6],
    [['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'], 0],
    [['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'], 6],
  ])('should return false if row does not have the keyword at index', (row, index) => {
    expect(checkRow(row, index)).toBeFalse();
  });
});

describe('checkRowReversed()', () => {
  it.each([
    [['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'], 4],
    [['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'], 6],
  ])('should return true if row has the reversed keyword at index %j', (row, index) => {
    expect(checkRowReversed(row, index)).toBeTrue();
  });

  it.each([
    [['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'], 3],
    [['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'], 7],
  ])('should return false if row does not have the reversed keyword at index', (row, index) => {
    expect(checkRowReversed(row, index)).toBeFalse();
  });
});
