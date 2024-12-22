import { calculateNextSecret } from "calculateNextSecret";

export function part1(input: string) {
  const buyers = input.split('\n').map(Number);

  return buyers.reduce((acc, buyer) => {
    let secret = buyer;
    for (let i = 0; i < 2000; i++) {
      secret = calculateNextSecret(secret);
    }
    return acc + secret;
  }, 0);
}
