import { findOperations } from 'findOperations';
import { parseMul } from 'parseMul';

export function part2(input: string) {
  const operations = findOperations(input);
  const muls: string[] = [];
  let mulEnabled = true;

  for (const operation of operations) {
    if (operation === 'do()') {
      mulEnabled = true;
      continue;
    }

    if (operation === "don't()") {
      mulEnabled = false;
      continue;
    }

    if (mulEnabled) {
      muls.push(operation);
    }
  }

  return muls.map(parseMul).reduce((acc, curr) => acc + curr[0] * curr[1], 0);
}
