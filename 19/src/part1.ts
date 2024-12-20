function solve(design: string, towels: string[]) {
  if (!design.length || !towels.length) {
    return [];
  }

  for (const towel of towels) {
    if (design === towel) {
      return true;
    }

    if (design.startsWith(towel)) {
      if (solve(design.slice(towel.length), towels)) {
        return true;
      }
      continue;
    }
  }

  return false;
}

export function part1(input: string) {
  const [towelsInput, designsInput] = input.split('\n\n');
  const towels = towelsInput.split(', ');
  const designs = designsInput.split('\n');

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
