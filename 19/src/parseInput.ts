export function parseInput(input: string) {
  const [towelsInput, designsInput] = input.split('\n\n');
  const towels = towelsInput.split(', ');
  const designs = designsInput.split('\n');

  return [towels, designs] as const;
}
