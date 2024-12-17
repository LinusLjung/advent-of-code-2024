type Registers = Record<'a' | 'b' | 'c', number>;

function getCombo(operand: number, registers: Registers) {
  if (operand <= 3) {
    return operand;
  }

  return registers[['a', 'b', 'c'][operand - 4] as keyof Registers];
}

function adv(operand: number, registers: Registers) {
  return (registers.a = Math.floor(registers.a / Math.pow(2, getCombo(operand, registers))));
}

function bxl(operand: number, registers: Registers) {
  return (registers.b = registers.b ^ operand);
}

function bst(operand: number, registers: Registers) {
  return (registers.b = getCombo(operand, registers) % 8);
}

function jnz(operand: number, registers: Registers) {
  if (registers.a === 0) {
    return;
  }

  return operand;
}

function bxc(registers: Registers) {
  registers.b = registers.b ^ registers.c;
}

function out(operand: number, registers: Registers) {
  return getCombo(operand, registers) % 8;
}

function bdv(operand: number, registers: Registers) {
  return (registers.b = Math.floor(registers.a / Math.pow(2, getCombo(operand, registers))));
}

function cdv(operand: number, registers: Registers) {
  return (registers.c = Math.floor(registers.a / Math.pow(2, getCombo(operand, registers))));
}

export function part1(input: string) {
  const [registerInput, programInput] = input.split('\n\n');
  const registers = registerInput.split('\n').reduce<Registers>(
    (acc, curr, i) => {
      return { ...acc, [['a', 'b', 'c'][i]]: Number(curr.split(' ').at(-1)) };
    },
    { a: 0, b: 0, c: 0 }
  );
  const program = programInput.split(' ')[1].split(',').map(Number);

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
