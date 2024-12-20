import { parseInput } from "parseInput";
import { solve } from "solve";

export function part1(input: string) {
  const [towels, designs] = parseInput(input);

  let possibleSolves = 0;

  for (const design of designs.slice(0)) {
    const isSolvable = solve(
      design,
      towels.filter((towel) => design.includes(towel))
    );

    if (isSolvable) {
      possibleSolves++;
    }
  }

  return possibleSolves;
}
