export function getGrid(input: string): string[][] {
  return input.split('\n').map((row) => row.split(''));
}
