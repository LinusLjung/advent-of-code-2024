import getLists from 'getLists';

export function part1(input: string) {
  const [left, right] = getLists(input).map((list) => {
    return list.toSorted();
  });

  return left.reduce((sum, num, i) => {
    return sum + Math.abs(num - right[i]);
  }, 0);
}
