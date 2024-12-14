import { getRobot } from 'getRobot';
import { trackRobot } from 'trackRobot';

export function part1(input: string, xLimit = 101, yLimit = 103) {
  const robots = input.split('\n').map(getRobot);

  const quadrants: [number, number, number, number] = [0, 0, 0, 0];

  for (const robot of robots) {
    trackRobot(robot, 100, xLimit, yLimit);

    if (robot.position[0] === Math.floor(xLimit / 2) || robot.position[1] === Math.floor(yLimit / 2)) {
      continue;
    }

    if (robot.position[0] < xLimit / 2) {
      if (robot.position[1] < yLimit / 2) {
        quadrants[0]++;
      } else {
        quadrants[2]++;
      }
    } else {
      if (robot.position[1] < yLimit / 2) {
        quadrants[1]++;
      } else {
        quadrants[3]++;
      }
    }
  }

  return quadrants.reduce((acc, curr) => acc * curr, 1);
}
