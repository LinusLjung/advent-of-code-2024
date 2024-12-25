import { describe, expect, it } from 'bun:test';
import { keyFits } from 'keyFits';

describe('keyFits()', () => {
  it.each([
    [[5, 0, 2, 1, 3], [0, 5, 3, 4, 3], false],
    [[4, 3, 4, 0, 2], [0, 5, 3, 4, 3], false],
    [[3, 0, 2, 0, 1], [0, 5, 3, 4, 3], true],
    [[5, 0, 2, 1, 3], [1, 2, 0, 5, 3], false],
    [[4, 3, 4, 0, 2], [1, 2, 0, 5, 3], true],
    [[3, 0, 2, 0, 1], [1, 2, 0, 5, 3], true],
  ])('should return true if key fits, %#', (key, lock, expected) => {
    expect(keyFits(key, lock, 7)).toBe(expected);
  });
});
