import { describe, expect, it } from 'bun:test';
import { isIncreasing } from 'isIncreasing';

describe('isIncreasing()', () => {
  it.each([
    [[1, 2, 3, 4, 5], false],
    [[8, 11, 14, 17, 20], false],
    [[-10, 11, 14, 17, 20], true],
    [[11, 14, 17, 20, 25], true],
    [[53, 55, 56, 59, 62, 61, 65], true],
  ])('should return true on increasing sequences', (input, withFailTolerance) => {
    expect(isIncreasing(input, withFailTolerance)).toBeTrue();
  });

  it.each([
    [[5, 4, 3, 2, 1], false],
    [[1, 2, 3, 4, 4], false],
    [[1, 1, 3, 4, 5], false],
    [[-10, 11, 10, 20, 25], false],
    [[-10, 11, 14, 17, 25], true],
    [[1, 2, 7, 8, 9], true],
    [[67, 73, 75, 77, 83, 85, 90], true],
    [[87, 87, 85, 87, 90, 93], true],
  ])('should return false on not increasing sequences', (input, withFailTolerance) => {
    expect(isIncreasing(input, withFailTolerance)).toBeFalse();
  });
});
