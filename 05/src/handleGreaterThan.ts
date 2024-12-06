
export function handleGreaterThan(update: number[], page: number, rule: number) {
  if (!update.includes(rule)) {
    return true;
  }

  return update.indexOf(page) > update.indexOf(rule);
}
