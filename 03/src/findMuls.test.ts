import { describe, expect, it } from 'bun:test';
import { findMuls } from 'findMuls';

describe('findMuls()', () => {
  it('should return an array of all muls', () => {
    expect(
      findMuls(`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))mul(-10,-24)mul(-1,1)
mul(1,-1)`)
    ).toStrictEqual(['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)', 'mul(-10,-24)', 'mul(-1,1)', 'mul(1,-1)']);
  });
});
