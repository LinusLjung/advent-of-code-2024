import { describe, expect, it } from 'bun:test';
import { isDecreasing } from 'isDecreasing';

describe('isDecreasing()', () => {
  it.each([
    [[5, 4, 3, 2, 1], false],
    [[5, 2, -1, -4, -5], false],
    [[1, 4, 3, 2, 1], true],
    [[25, 20, 17, 14, 11], true],
    [[25, 0, -1, -2, -3], true],
    [[5, 4, 4, 3, 2], true],
  ])('should return true on decreasing sequences', (input, withFailTolerance) => {
    expect(isDecreasing(input, withFailTolerance)).toBeTrue();
  });

  it.each([
    [[1, 2, 3, 4, 5], false],
    [[-10, 11, 14, 20, 25], false],
    [[1, 2, 3, 4, 4], false],
    [[5, 5, 4, 3, 2], false],
    [[5, 4, 3, 2, 2], false],
    [[5, 5, 4, 2, 2], true],
    [[5, 5, 3, 2, 2], true],
    [[10, 5, 3, 2, -4], true],
    [[67, 73, 75, 77, 83, 85, 90], true],
    [[ 87, 87, 85, 87, 90, 93 ], true],
  ])('should return false on not decreasing sequences', (input, withFailTolerance) => {
    expect(isDecreasing(input, withFailTolerance)).toBeFalse();
  });
});
