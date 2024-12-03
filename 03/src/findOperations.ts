export function findOperations(input: string): string[] {
  return [...input.matchAll(/mul\(\-?\d+,\-?\d+\)|don't\(\)|do\(\)/gm)].map((match) => match[0]);
}
