export function part1(input: string) {
  const map = input.split('').map(Number);
  let sum = 0;

  for (let i = 0, position = 0, backfillIndex = map.length - 1; i < backfillIndex + 1; i++) {
    let repeat = map[i];

    if (i % 2 === 0) {
      for (let j = 0; j < repeat; j++) {
        const id = i / 2;

        sum += id * position++;
      }
      continue;
    }

    while (repeat > 0) {
      const backfillRepeat = map[backfillIndex];
      map[backfillIndex] = Math.max(map[backfillIndex] - repeat, 0);

      for (let j = 0; j < Math.min(backfillRepeat, repeat); j++) {
        const backfillId = Math.floor(backfillIndex / 2);

        sum += backfillId * position++;
      }

      repeat = repeat - backfillRepeat;

      if (!map[backfillIndex]) {
        backfillIndex -= 2;
      }
    }
  }

  return sum;
}
