import { assert } from 'console';

type Wires = Record<string, boolean | null>;

function parse(input: string) {
  const [wireInput, gateInput] = input.split('\n\n');

  const wires = wireInput.split('\n').reduce<Wires>((acc, curr) => {
    const [key, stringValue] = curr.split(': ');

    return { ...acc, [key]: stringValue === '1' };
  }, {});

  const gates = gateInput
    .split('\n')
    .reduce<Record<string, { input1: string; input2: string; gate: string }>>((acc, input) => {
      const [input1, gate, input2, _, output] = input.split(' ');

      return {
        ...acc,
        [output]: {
          input1,
          input2,
          gate,
        },
      };
    }, {});

  return [wires, gates] as const;
}

function allWiresHaveValue(wires: Wires) {
  for (const value of Object.values(wires)) {
    if (value == null) {
      return false;
    }
  }

  return true;
}

export function part1(input: string) {
  const [wires, gates] = parse(input);

  for (const output in gates) {
    wires[output] ??= null;
  }

  while (!allWiresHaveValue(wires)) {
    for (const [wire, gate] of Object.entries(gates)) {
      const value1 = wires[gate.input1];
      const value2 = wires[gate.input2];
      if (value1 == null || value2 == null) {
        continue;
      }

      switch (gate.gate) {
        case 'AND': {
          wires[wire] = value1 && value2;
          break;
        }
        case 'OR': {
          wires[wire] = value1 || value2;
          break;
        }
        case 'XOR': {
          if (value1 === value2) {
            wires[wire] = false;
            break;
          }
          wires[wire] = value1 || value2;
          break;
        }
      }
    }
  }

  return parseInt(
    Object.entries(wires)
      .filter(([wire]) => wire.startsWith('z'))
      .toSorted(([a], [b]) => {
        if (a < b) {
          return -1;
        }

        return 1;
      })
      .reduce<string>((acc, [, value]) => {
        assert(value != null);

        return (value ? '1' : '0') + acc;
      }, ''),
    2
  );
}
