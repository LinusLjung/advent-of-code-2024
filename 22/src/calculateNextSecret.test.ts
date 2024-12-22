import { describe, expect, it } from 'bun:test';
import { calculateNextSecret } from 'calculateNextSecret';

describe('calculateNextSecret()', () => {
  it.each([
    [123, 15887950],
    [15887950, 16495136],
  ])('should calculate next secret from %d', (secret, expected) => {
    expect(calculateNextSecret(secret)).toBe(expected);
  });
});
