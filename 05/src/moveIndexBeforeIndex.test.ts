import { describe, expect, it } from 'bun:test';
import { moveIndexBeforeIndex } from 'moveIndexBeforeIndex';

describe('moveIndexBeforeIndex()', () => {
  it.each([
    [4, 0, [1, 2, 3, 4, 5], [5, 1, 2, 3, 4]],
    [3, 1, [97, 13, 75, 29, 47], [97, 29, 13, 75, 47]],
  ])('should move element from one index to another', (fromIndex, beforeIndex, update, expected) => {
    expect(moveIndexBeforeIndex(fromIndex, beforeIndex, update)).toEqual(expected);
  });
});
