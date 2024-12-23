import { findLans } from 'findLans';
import { getNodesWithConnections } from 'getNodesWithConnections';

export function part2(input: string) {
  const nodes = getNodesWithConnections(input);
  const lans = findLans(nodes);

  return [...lans].reduce((acc, curr) => (curr.length > acc.length ? curr : acc));
}
