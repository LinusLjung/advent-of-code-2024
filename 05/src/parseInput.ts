export function parseInput(input: string): [rules: [number, number][], updates: number[][]] {
  const [inputRules, inputUpdates] = input.split('\n\n');

  const rules = inputRules.split('\n').map((rule) => rule.split('|').map(Number)) as [number, number][];
  const updates = inputUpdates.split('\n').map((update) => update.split(',').map(Number));

  return [rules, updates];
}
