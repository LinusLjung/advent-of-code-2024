import { getArgs } from '@/getArgs';
import getInput from '@/getInput';
import { part1 } from 'part1';
import { part2 } from 'part2';

const { part, input: inputPath } = getArgs<{ part: number; input: string }>();
const input = getInput(inputPath ?? 'input.txt');

if (!part || part === 1) {
  console.log(part1(input));
}

if (!part || part === 2) {
  console.log(part2(input));
}
