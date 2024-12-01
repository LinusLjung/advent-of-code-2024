export function part1(input: string) {
  const [left, right] = input
    .replaceAll('   ', ' ')
    .split('\n')
    .reduce<[number[], number[]]>(
      ([left, right], row) => {
        const [first, second] = row.split(' ').map(Number);

        return [
          [...left, first],
          [...right, second],
        ];
      },
      [[], []]
    )
    .map((list) => {
      return list.toSorted();
    });

  return left.reduce((sum, num, i) => {
    return sum + Math.abs(num - right[i]);
  }, 0);
}
