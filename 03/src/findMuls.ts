export function findMuls(input: string): string[] {
  return [...input.matchAll(/mul\(\-?\d+,\-?\d+\)/g)].map((match) => match[0]);
}
