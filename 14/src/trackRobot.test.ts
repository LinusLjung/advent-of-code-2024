import { describe, expect, it } from 'bun:test';
import { getRobot } from 'getRobot';
import { trackRobot } from 'trackRobot';

describe('trackRobot()', () => {
  it('should return the end state of the robot', () => {
    expect(trackRobot(getRobot('p=2,4 v=2,-3'), 5, 11, 7)).toEqual(getRobot('p=1,3 v=2,-3'));
  });
});
