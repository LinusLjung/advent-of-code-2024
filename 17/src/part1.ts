import { adv, bdv, bst, bxc, bxl, cdv, jnz, out } from 'instructions';
import { parse } from 'parse';
import type { Registers } from 'types';

function run(registers: Registers, program: number[]) {
  let pointer = 0;
  const output: number[] = [];

  while (pointer + 1 < program.length) {
    const opcode = program[pointer];
    const operand = program[pointer + 1];

    if (opcode === 3) {
      pointer = jnz(operand, registers) ?? pointer + 2;
      continue;
    }

    pointer += 2;

    if (opcode === 0) {
      adv(operand, registers);
      continue;
    }

    if (opcode === 1) {
      bxl(operand, registers);
      continue;
    }

    if (opcode === 2) {
      bst(operand, registers);
      continue;
    }

    if (opcode === 4) {
      bxc(registers);
      continue;
    }

    if (opcode === 5) {
      output.push(out(operand, registers));
      continue;
    }

    if (opcode === 6) {
      bdv(operand, registers);
      continue;
    }

    if (opcode === 7) {
      cdv(operand, registers);
      continue;
    }
  }

  return output.toString();
}

export function part1(input: string) {
  const [registers, program] = parse(input);

  return 
}
