import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import { part2 } from 'part2';
import path from 'path';

const exampleInput = getInput(path.join(import.meta.dir, '../example-input.txt'));
const exampleInput2 = getInput(path.join(import.meta.dir, '../example-input-2.txt'));
const exampleInput3 = getInput(path.join(import.meta.dir, '../example-input-3.txt'));
const exampleInput4 = getInput(path.join(import.meta.dir, '../example-input-4.txt'));
const exampleInput5 = getInput(path.join(import.meta.dir, '../example-input-5.txt'));
const exampleInput6 = getInput(path.join(import.meta.dir, '../example-input-6.txt'));
const exampleInput7 = getInput(path.join(import.meta.dir, '../example-input-7.txt'));
const exampleInput8 = getInput(path.join(import.meta.dir, '../example-input-8.txt'));

const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(1);
    expect(part1(exampleInput2)).toBe(2);
    expect(part1(exampleInput3)).toBe(4);
    expect(part1(exampleInput4)).toBe(3);
    expect(part1(exampleInput5)).toBe(36);
    expect(part1(input)).toBe(512);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput6)).toBe(3);
    expect(part2(exampleInput7)).toBe(13);
    expect(part2(exampleInput8)).toBe(227);
    expect(part2(input)).toBe(1045);
  });
});
