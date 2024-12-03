import { describe, expect, it } from 'bun:test';
import { findOperations } from 'findOperations';

describe('findOperations()', () => {
  it('should return an array of all operations', () => {
    expect(
      findOperations(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)un
do()?mul(-10,-23))`)
    ).toStrictEqual(['mul(2,4)', "don't()", 'mul(5,5)', 'mul(11,8)', 'do()', 'mul(-10,-23)']);
  });
});
