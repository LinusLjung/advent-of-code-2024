export function solve(design: string, towels: string[], cache: Map<string, number> = new Map()) {
  if (cache.has(design)) {
    return cache.get(design)!;
  }
  if (!design.length || !towels.length) {
    return 0;
  }

  let solves = 0;

  for (const towel of towels) {
    if (design === towel) {
      solves++;
    }

    if (design.startsWith(towel)) {
      solves += solve(design.slice(towel.length), towels, cache);
      continue;
    }
  }

  cache.set(design, solves);

  return solves;
}
