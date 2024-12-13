import assert from 'assert';
import type { Button, Game } from 'types';

export function part1(input: string) {
  const games: Game[] = input.split('\n\n').map((gameInput) => {
    const lines = gameInput.split('\n');

    const buttons = lines.slice(0, 2).map<Button>((buttonInput) => {
      const match = buttonInput.match(/X\+(\d+),\sY\+(\d+)/);
      assert(match);
      return [Number(match[1]), Number(match[2])];
    }) as [Button, Button];

    const match = lines[2].match(/X=(\d+),\sY=(\d+)/);
    assert(match);
    const target = [Number(match[1]), Number(match[2])] as [number, number];

    return { buttons, target };
  });

  console.log(games);
}
