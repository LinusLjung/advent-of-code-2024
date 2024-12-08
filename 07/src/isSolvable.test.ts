import { describe, expect, it } from 'bun:test';
import { isSolvable } from 'isSolvable';
import type { Test } from 'types';

describe('isSolvable()', () => {
  it.each<[Test, boolean]>([
    [[190, [10, 19]], false],
    [[3267, [81, 40, 27]], false],
    [[292, [11, 6, 16, 20]], false],
    [[4515215, [594, 17, 67, 1, 6, 9, 74, 845]], false],
    [[156, [15, 6]], true],
    [[7290, [6, 8, 6, 15]], true],
    [[192, [17, 8, 14]], true],
  ])('should return true if the equation %j is solvable', (test, withConcat) => {
    expect(isSolvable(test, withConcat)).toBeTrue();
  });
});
