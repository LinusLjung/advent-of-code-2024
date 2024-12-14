import type { Robot } from 'getRobot';

export function trackRobot(robot: Robot, iterations: number, xLimit: number, yLimit: number) {
  for (let i = 0; i < iterations; i++) {
    robot.position[0] += robot.velocity[0];
    robot.position[0] = ((robot.position[0] % xLimit) + xLimit) % xLimit;
    robot.position[1] += robot.velocity[1];
    robot.position[1] = ((robot.position[1] % yLimit) + yLimit) % yLimit;
  }

  return robot;
}
