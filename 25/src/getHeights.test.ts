import { describe, expect, it } from 'bun:test';
import { getHeights } from 'getHeights';

describe('getHeights()', () => {
  it.each([
    [
      `#####
.####
.####
.####
.#.#.
.#...
.....`,
      [0, 5, 3, 4, 3],
    ],
    [
      `.....
#....
#....
#...#
#.#.#
#.###
#####`,
      [5, 0, 2, 1, 3],
    ],
  ])('should return the heights for a simple schematic', (schematic, expected) => {
    expect(getHeights(schematic)).toEqual(expected);
  });
});
