import { describe, expect, it } from 'bun:test';
import { hasValidLevelChanges } from 'hasValidLevelChanges';

describe('hasValidLevelChanges()', () => {
  it.each([
    [[1, 4, 7, 10]],
    // [[-5, -2, 0, 3]]
  ])('should return true if level changes are within threshold', (input) => {
    expect(hasValidLevelChanges(input)).toBeTrue();
  });

  it.each([[[1, 5, 7, 10]], [[-6, -1, 0, 1]]])(
    'should return false if level changes are outside of threshold',
    (input) => {
      expect(hasValidLevelChanges(input)).toBeFalse();
    }
  );

  it.each([
    [[1, 5, 7, 10], 0],
    [[-6, -1, 0, 1], 0],
    [[-6, -1, 10, 15], false],
    [[-3, -1, 10, 15], false],
    [[-6, -3, 0, 6], 2],
    [[2, 5, 7, 10], -1],
  ])('should handle fail tolerance', (input, expected) => {
    expect(hasValidLevelChanges(input, true)).toBe(expected);
  });
});
