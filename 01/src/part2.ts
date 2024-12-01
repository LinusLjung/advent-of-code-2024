import getLists from 'getLists';

function getOccurrence(num: number, arr: number[]) {
  return arr.reduce((sum, curr) => {
    if (curr === num) {
      return sum + 1;
    }

    return sum;
  }, 0);
}

export function part2(input: string) {
  const [left, right] = getLists(input);

  return left.reduce((sum, num) => {
    return sum + num * getOccurrence(num, right);
  }, 0);
}
