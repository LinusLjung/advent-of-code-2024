import { findOperations } from 'findOperations';

export function findMuls(input: string): string[] {
  return findOperations(input).filter((operation) => operation !== 'do()' && operation !== "don't()");
}
