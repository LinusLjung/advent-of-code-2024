export default function getLists(input: string) {
  return input
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
    );
}
