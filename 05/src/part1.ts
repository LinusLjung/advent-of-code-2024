function handleLessThan(update: number[], page: number, rule: number) {
  if (!update.includes(rule)) {
    return true;
  }

  return update.indexOf(page) < update.indexOf(rule);
}
function handleGreaterThan(update: number[], page: number, rule: number) {
  if (!update.includes(rule)) {
    return true;
  }

  return update.indexOf(page) > update.indexOf(rule);
}

export function part1(input: string) {
  const [inputRules, inputUpdates] = input.split('\n\n');

  const rules = inputRules.split('\n').map((rule) => rule.split('|').map(Number)) as [number, number][];
  const updates = inputUpdates.split('\n').map((update) => update.split(',').map(Number));

  return updates
    .filter((update) => {
      return update.every((page, i, update) => {
        return rules
          .filter((rule) => rule.includes(page))
          .every((rule) => {
            if (rule[0] === page) {
              return handleLessThan(update, page, rule[1]);
            }

            return handleGreaterThan(update, page, rule[0]);
          });
      });
    })
    .reduce((acc, curr) => {
      return acc + (curr.at(Math.min(curr.length / 2)) ?? 0);
    }, 0);
}
