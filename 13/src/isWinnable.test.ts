import { describe, expect, it } from 'bun:test';
import { isWinnable } from 'isWinnable';
import type { Game } from 'types';

describe('isWinnable()', () => {
  it.each<[Game, boolean]>([
    [
      {
        buttons: [
          [94, 34],
          [22, 67],
        ],
        target: [8400, 5400],
      },
      true,
    ],
    [
      {
        buttons: [
          [26, 66],
          [67, 21],
        ],
        target: [12748, 12176],
      },
      false,
    ],
    [
      {
        buttons: [
          [17, 86],
          [84, 37],
        ],
        target: [7870, 6450],
      },
      true,
    ],
    [
      {
        buttons: [
          [69, 23],
          [27, 71],
        ],
        target: [18641, 10279],
      },
      false,
    ],
  ])('should check if game can be won', (game, expected) => {
    expect(isWinnable(game)).toBe(expected);
  });
});
