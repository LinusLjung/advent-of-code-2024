import type { Registers } from 'types';

export function getCombo(operand: number, registers: Registers) {
  if (operand <= 3) {
    return operand;
  }

  return registers[['a', 'b', 'c'][operand - 4] as keyof Registers];
}

export function adv(operand: number, registers: Registers) {
  return (registers.a = Math.floor(registers.a / Math.pow(2, getCombo(operand, registers))));
}

export function bxl(operand: number, registers: Registers) {
  return (registers.b = registers.b ^ operand);
}

export function bst(operand: number, registers: Registers) {
  return (registers.b = getCombo(operand, registers) % 8);
}

export function jnz(operand: number, registers: Registers) {
  if (registers.a === 0) {
    return;
  }

  return operand;
}

export function bxc(registers: Registers) {
  registers.b = registers.b ^ registers.c;
}

export function out(operand: number, registers: Registers) {
  return getCombo(operand, registers) % 8;
}

export function bdv(operand: number, registers: Registers) {
  return (registers.b = Math.floor(registers.a / Math.pow(2, getCombo(operand, registers))));
}

export function cdv(operand: number, registers: Registers) {
  return (registers.c = Math.floor(registers.a / Math.pow(2, getCombo(operand, registers))));
}
