import { describe, expect, it } from 'bun:test';
import { isSolvable } from 'isSolvable';
import type { Test } from 'types';

describe('isSolvable()', () => {
  it.each<[Test]>([
    [[190, [10, 19]]],
    [[3267, [81, 40, 27]]],
    [[292, [11, 6, 16, 20]]],
    [[4515215, [594, 17, 67, 1, 6, 9, 74, 845]]],
  ])('should return true if the equation %j is solvable', (test) => {
    expect(isSolvable(test)).toBeTrue();
  });
});
