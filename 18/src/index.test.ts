import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import { part2 } from 'part2';
import path from 'path';

const exampleInput = getInput(path.join(import.meta.dir, '../example-input.txt'));
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput, 7, 7, 12)).toBe(22);
    expect(part1(input)).toBe(322);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput, 7, 7, 12)).toBe('6,1');
    expect(part2(input)).toBe('60,21');
  });
});
