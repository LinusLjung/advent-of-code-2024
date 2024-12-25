export function getHeights(schematic: string): number[] {
  const lines = schematic.split('\n');
  const heights: number[] = [];

  for (let c = 0; c < lines[0].length; c++) {
    let count = 0;
    for (let r = 0; r < lines.length; r++) {
      if (lines[r][c] !== '#') {
        continue;;
      }
      count++;
    }
    heights.push(count - 1);
  }

  return heights;
}
