export function isValidLevelChange(level1: number, level2: number) {
  const change = Math.abs(level1 - level2);

  return change <= 3 && change > 0;
}
