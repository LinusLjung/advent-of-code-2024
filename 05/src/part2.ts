import { parseInput } from 'parseInput';
import { repairUpdate } from 'repairUpdate';
import { sumReducer } from 'sumReducer';
import { validateUpdate } from 'validateUpdate';

export function part2(input: string) {
  const [rules, updates] = parseInput(input);

  const invalidUpdates = updates.filter((update) => !validateUpdate(update, rules));

  return invalidUpdates.map((update) => repairUpdate(update, rules)).reduce(sumReducer, 0);
}
