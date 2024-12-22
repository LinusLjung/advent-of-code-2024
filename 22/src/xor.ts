export function xor(a: number, b: number) {
  let aBits = a.toString(2);
  let bBits = b.toString(2);

  aBits = aBits.padStart(bBits.length, '0');
  bBits = bBits.padStart(aBits.length, '0');

  let result = '';

  for (let i = 0; i < aBits.length; i++) {
    if (aBits[i] === bBits[i]) {
      result += '0';
      continue;
    }

    if (aBits[i] === '1' || bBits[i] === '1') {
      result += '1';
      continue;
    }

    result += '0';
  }

  return parseInt(result, 2);
}
