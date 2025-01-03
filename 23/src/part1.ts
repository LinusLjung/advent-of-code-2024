import { getNodesWithConnections } from 'getNodesWithConnections';

function findTriples(nodes: Record<string, Set<string>>) {
  const triples: string[][] = [];

  for (const [node, set] of Object.entries(nodes)) {
    const doubles = [...set].filter((other) => nodes[other].has(node)).map((n) => [n, node]);

    for (const double of doubles) {
      [...set]
        .filter((other) => nodes[other].has(double[0]) && nodes[other].has(double[1]))
        .forEach((node) => triples.push([...double, node]));
    }
  }

  const uniqueTriples = new Set<string>();

  triples.map((triple) => triple.toSorted().join('-')).forEach((triple) => uniqueTriples.add(triple));

  return [...uniqueTriples];
}

export function part1(input: string) {
  const nodes = getNodesWithConnections(input);
  const triples = findTriples(nodes);

  return triples.filter((triple) => triple.split('-').some((node) => node[0] === 't')).length;
}
