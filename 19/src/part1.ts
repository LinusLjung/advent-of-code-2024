function solve(design: string, towels: string[]) {
}

export function part1(input: string) {
  const [towelsInput, designsInput] = input.split('\n\n');
  const towels = towelsInput.split(', ');
  const designs = designsInput.split('\n');

  for (const design of designs) {
    const variants = solve(design, towels);
    console.log(variants);
  }

  console.log(towels);
  console.log(designs);

  return 0;
}
