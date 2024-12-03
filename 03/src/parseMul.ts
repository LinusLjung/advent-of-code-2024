import assert from 'assert';

export function parseMul(mul: string): [number, number] {
  const match = mul.match(/(\-?\d+),(\-?\d+)/);

  assert(match);

  return [Number(match[1]), Number(match[2])];
}
