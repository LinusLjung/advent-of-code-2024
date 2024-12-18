import { getArgs } from '@/getArgs';
import getInput from '@/getInput';
import { part1 } from 'part1';
import { part2 } from 'part2';

const { part, isExample } = getArgs<{ part: number; isExample: boolean }>();
const input = getInput();

if (!part || part === 1) {
  if (isExample) {
    console.log(part1(input, 7, 7, 12));
    process.exit();
  }
  console.log(part1(input));
}

if (!part || part === 2) {
  console.log(part2(input));
}
