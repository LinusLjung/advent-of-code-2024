import { describe, expect, it } from 'bun:test';
import { isIncreasing } from 'isIncreasing';

describe('isIncreasing()', () => {
  it.each([[[1, 2, 3, 4, 5]], [[-10, 11, 14, 20, 25]]])('should return true on increasing sequences', (input) => {
    expect(isIncreasing(input)).toBeTrue();
  });

  it.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 4]], [[1, 1, 3, 4, 5]], [[-10, 11, 10, 20, 25]]])(
    'should return false on not increasing sequences',
    (input) => {
      expect(isIncreasing(input)).toBeFalse();
    }
  );
});
