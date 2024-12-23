export function getNodesWithConnections(input: string) {
  const connections = input.split('\n');
  const nodes: Record<string, Set<string>> = {};

  for (const connection of connections) {
    const [a, b] = connection.split('-') as [string, string];

    if (!nodes[a]) {
      nodes[a] = new Set<string>();
    }
    if (!nodes[b]) {
      nodes[b] = new Set<string>();
    }

    nodes[a].add(b);
    nodes[b].add(a);
  }

  return nodes;
}
