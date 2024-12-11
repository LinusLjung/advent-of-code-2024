import { describe, expect, it } from 'bun:test';
import LinkedList from 'LinkedList';
import { tick } from 'tick';

describe('tick()', () => {
  it.each([
    ['0 1 10 99 999', '1 2024 1 0 9 9 2021976'],
    ['125 17', '253000 1 7'],
    ['253000 1 7', '253 0 2024 14168'],
    ['253 0 2024 14168', '512072 1 20 24 28676032'],
  ])('should update stones [%s] to [%s]', (input, expected) => {
    const list = new LinkedList(input.split(' ').map(Number));

    expect([...tick(list)].map(({ value }) => value).join(' ')).toBe(expected);
  });
});
