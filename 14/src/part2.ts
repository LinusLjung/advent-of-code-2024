import { getRobot, type Robot } from 'getRobot';
import { trackRobot } from 'trackRobot';

function renderGrid(robots: Robot[], xLimit: number, yLimit: number) {
  const grid: string[][] = [];
  for (let r = 0; r < yLimit; r++) {
    grid.push(new Array<string>(xLimit).fill('.'));
  }

  for (const robot of robots) {
    grid[robot.position[1]][robot.position[0]] = 'x';
  }

  return grid;
}

function hasRange(numbers: number[], target: number) {
  let count = 0;

  numbers = numbers.toSorted();

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] - 1 === numbers[i - 1]) {
      if (++count === target) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  return false;
}

function canHaveTree(robots: Robot[]) {
  const xGroups: Record<number, Robot[]> = {};

  for (const robot of robots) {
    xGroups[robot.position[0]] ??= [];
    xGroups[robot.position[0]].push(robot);
  }

  for (const group of Object.values(xGroups)) {
    if (
      hasRange(
        group.map((robot) => robot.position[1]),
        10
      )
    ) {
      return true;
    }
  }

  return false;
}

export async function part2(input: string, xLimit = 101, yLimit = 103) {
  const robots = input.split('\n').map(getRobot);
  let count = 0;

  while (true) {
    count++;
    for (const robot of robots) {
      trackRobot(robot, 1, xLimit, yLimit);
    }

    if (!canHaveTree(robots)) {
      continue;
    }

    const grid = renderGrid(robots, xLimit, yLimit);

    for (const row of grid) {
      console.log(row.join(''));
    }
    console.log(count);

    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
}
