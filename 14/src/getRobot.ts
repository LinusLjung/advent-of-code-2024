export type Robot = {
  position: [number, number];
  velocity: [number, number];
};

export function getRobot(line: string): Robot {
  const [position, velocity] = line
    .split(' ')
    .map((part) => part.slice(2).split(',').map(Number) as [number, number]) as [[number, number], [number, number]];

  return {
    position,
    velocity,
  };
}
