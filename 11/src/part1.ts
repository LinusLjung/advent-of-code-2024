import { collapseList } from 'collapseList';
import LinkedList from 'LinkedList';
import { tick } from 'tick';

export function part1(input: string, iterations = 25) {
  const stones = input.split(' ').map(Number);
  const list = new LinkedList(stones);

  for (let i = 0; i < iterations; i++) {
    tick(list);
    collapseList(list);
  }

  return [...list].reduce((acc, curr) => acc + curr.multiplier, 0);
}
