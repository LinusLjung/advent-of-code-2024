import type { Game } from 'types';

export function getWins(game: Game) {
  const winnableXs = new Set<string>();
  const winnableYs = new Set<string>();

  for (let x = 0; x * game.buttons[0][0] < game.target[0]; x++) {
    const remaining = game.target[0] - x * game.buttons[0][0];

    if (remaining % game.buttons[1][0] !== 0) {
      continue;
    }

    winnableXs.add([x, remaining / game.buttons[1][0]].toString());
  }

  for (let y = 0; y * game.buttons[0][1] < game.target[1]; y++) {
    const remaining = game.target[1] - y * game.buttons[0][1];

    if (remaining % game.buttons[1][1] !== 0) {
      continue;
    }

    winnableYs.add([y, remaining / game.buttons[1][1]].toString());
  }

  const intersections = winnableXs.intersection(winnableYs);

  if (intersections.size === 0) {
    return [];
  }

  return [...intersections].map((intersection) => intersection.split(',').map(Number) as [number, number]);
}
