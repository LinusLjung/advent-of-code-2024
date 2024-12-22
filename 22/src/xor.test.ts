import { describe, expect, it } from 'bun:test';
import { xor } from 'xor';

describe('xor()', () => {
  it('should do xor', () => {
    expect(xor(42, 15)).toBe(37);
  });
});
