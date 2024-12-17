import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import { part2 } from 'part2';
import path from 'path';

const exampleInput = getInput(path.join(import.meta.dir, '../example-input.txt'));
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe('4,6,3,5,6,3,5,2,1,0');
    expect(part1(input)).toBe('2,7,4,7,2,1,7,5,1');
  });
});

describe.todo('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput)).toBe(117440);
  });
});
