export function sumReducer(acc: number, curr: number[]) {
  return acc + (curr.at(Math.min(curr.length / 2)) ?? 0);
}
