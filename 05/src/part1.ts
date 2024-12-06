import { parseInput } from 'parseInput';
import { sumReducer } from 'sumReducer';
import { validateUpdate } from 'validateUpdate';

export function part1(input: string) {
  const [rules, updates] = parseInput(input);

  return updates.filter((update) => validateUpdate(update, rules)).reduce(sumReducer, 0);
}
