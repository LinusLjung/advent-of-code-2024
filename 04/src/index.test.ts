import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import path from 'path';

const exampleInput = getInput(path.join(import.meta.dir, '../example-input.txt'));
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(18);
    expect(part1(input)).toBe(2591);
  });
});

describe.todo('part2()', () => {
  it('should output the solution', () => {});
});
