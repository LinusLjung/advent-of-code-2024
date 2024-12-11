import LinkedList from 'LinkedList';
import { tick } from 'tick';

export function part1(input: string, iterations = 25) {
  const stones = input.split(' ').map(Number);
  const list = new LinkedList(stones);
  
  for (let i = 0; i < iterations; i++) {
    tick(list);
  }

  return list.length;
}
