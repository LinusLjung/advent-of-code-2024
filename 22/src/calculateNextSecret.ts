import { xor } from 'xor';

function prune(number: number) {
  return number % 16777216;
}

function first(secret: number) {
  const result = secret * 64;
  secret = xor(result, secret);
  return prune(secret);
}

function second(secret: number) {
  const result = Math.floor(secret / 32);
  secret = xor(result, secret);
  return prune(secret);
}

function third(secret: number) {
  const result = secret * 2048;
  secret = xor(result, secret);
  return prune(secret);
}

export function calculateNextSecret(secret: number) {
  return third(second(first(secret)));
}
