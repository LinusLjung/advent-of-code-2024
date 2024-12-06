export function getRelevantRulesForUpdate(update: number[], rules: [number, number][]) {
  return rules.filter((rule) => update.includes(rule[0]) && update.includes(rule[1]));
}
