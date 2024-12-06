import { handleGreaterThan } from 'handleGreaterThan';
import { handleLessThan } from 'handleLessThan';

export function validateUpdate(update: number[], rules: number[][]) {
  return update.every((page, i, update) => {
    return rules
      .filter((rule) => rule.includes(page))
      .every((rule) => {
        if (rule[0] === page) {
          const isValid = handleLessThan(update, page, rule[1]);

          return isValid;
        }

        const isValid = handleGreaterThan(update, page, rule[0]);

        return isValid;
      });
  });
}
