import { getArgs } from '@/getArgs';
import getInput from '@/getInput';
import { part1 } from 'part1';
import { part2 } from 'part2';

const { part } = getArgs<{ part: number }>();
const input = getInput();

if (!part || part === 1) {
  console.log(part1(input));
}

if (!part || part === 2) {
  part2(input);
}
