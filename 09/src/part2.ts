export function part2(input: string) {
  let files = input
    .split('')
    .map(Number)
    .map((length, i) => {
      return {
        id: i % 2 === 0 ? i / 2 : -1,
        length,
      };
    });

  for (let i = files.length - 1; i > 0; i--) {
    const file = files[i];
    if (file.id === -1) {
      continue;
    }

    for (let j = 1; j < i; j++) {
      if (files[j].id !== -1) {
        continue;
      }

      if (files[j].length < file.length) {
        continue;
      }

      files[j].length -= file.length;

      files = [...files.slice(0, j), file, ...files.slice(j, i), ...files.slice(i + 1)];

      if (files[i].id === -1) {
        files[i].length += file.length;
      } else if (files[i - 1].id === -1) {
        files[i - 1].length += file.length;
      } else {
        files = [...files.slice(0, i), { id: -1, length: file.length }, ...files.slice(i)];
        i++;
      }

      i++;
      break;
    }
  }

  let sum = 0;

  for (let i = 0, k = 0; i < files.length; i++) {
    const file = files[i];

    if (file.id === -1) {
      k += file.length;
      continue;
    }

    for (let j = 0; j < file.length; j++) {
      sum += file.id * k++;
    }
  }

  return sum;
}
