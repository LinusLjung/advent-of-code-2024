import type { Registers } from 'types';

export function parse(input: string) {
  const [registerInput, programInput] = input.split('\n\n');
  const registers = registerInput.split('\n').reduce<Registers>(
    (acc, curr, i) => {
      return { ...acc, [['a', 'b', 'c'][i]]: Number(curr.split(' ').at(-1)) };
    },
    { a: 0, b: 0, c: 0 }
  );
  const program = programInput.split(' ')[1].split(',').map(Number);

  return [registers, program] as const;
}
