import { describe, expect, it } from 'bun:test';
import { isDecreasing } from 'isDecreasing';

describe('isDecreasing()', () => {
  it.each([[[5, 4, 3, 2, 1]], [[25, 20, 14, 11, -10]]])('should return true on decreasing sequences', (input) => {
    expect(isDecreasing(input)).toBeTrue();
  });

  it.each([[[1, 2, 3, 4, 5]], [[-10, 11, 14, 20, 25]], [[1, 2, 3, 4, 4]], [[1, 1, 3, 4, 5]]])(
    'should return false on not decreasing sequences',
    (input) => {
      expect(isDecreasing(input)).toBeFalse();
    }
  );
});
