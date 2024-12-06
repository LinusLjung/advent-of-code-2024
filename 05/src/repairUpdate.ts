import { getRelevantRulesForUpdate } from 'getRelevantRulesForUpdate';
import { moveIndexBeforeIndex } from 'moveIndexBeforeIndex';
import { validateUpdate } from 'validateUpdate';

function findLeftRulesForPage(page: number, rules: [number, number][]) {
  return rules.filter((rule) => rule[0] === page);
}

export function repairUpdate(update: number[], rules: [number, number][]) {
  rules = rules.filter((rule) => update.includes(rule[0]) && update.includes(rule[1]));

  while (!validateUpdate(update, rules)) {
    for (let i = update.length - 1; i > 0; i--) {
      const page = update[i];
      const relevantRules = findLeftRulesForPage(page, getRelevantRulesForUpdate(update, rules));

      let didMove = false;

      for (let j = 0; j < i; j++) {
        if (relevantRules.map((rule) => rule[1]).includes(update[j])) {
          update = moveIndexBeforeIndex(i, j, update);
          didMove = true;
          break;
        }
      }

      if (didMove) {
        i++;
      }
    }

    return update;
  }

  return update;
}
