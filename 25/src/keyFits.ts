export function keyFits(key: number[], lock: number[], lockHeight: number) {
  for (let i = 0; i < key.length; i++) {
    if (key[i] + lock[i] >= lockHeight - 1) {
      return false;
    }
  }

  return true;
}
