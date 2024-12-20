import { parseInput } from 'parseInput';
import { solve } from 'solve';

export function part2(input: string) {
  const [towels, designs] = parseInput(input);

  let numberOfSolves = 0;
  for (const design of designs) {
    numberOfSolves += solve(
      design,
      towels.filter((towel) => design.includes(towel))
    );
  }

  return numberOfSolves;
}
