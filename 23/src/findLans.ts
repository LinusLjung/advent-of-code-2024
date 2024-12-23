const cache = new Map<string, Set<string>>();

function findLansForNodes(nodes: string[], nodesRecord: Record<string, Set<string>>, depth = 0): Set<string> {
  if (cache.has(nodes.toString())) {
    return cache.get(nodes.toString())!;
  }

  const sharedConnections = nodes.map((node) => nodesRecord[node]).reduce((set, node) => set.intersection(node));
  const lans = new Set<string>();

  if (sharedConnections.size === 0) {
    lans.add(nodes.toSorted().toString());

    cache.set(nodes.toString(), lans);
    return lans;
  }

  for (const other of [...sharedConnections]) {
    for (const lan of findLansForNodes([...nodes, other].toSorted(), nodesRecord, ++depth)) {
      lans.add(lan);
    }
  }

  cache.set(nodes.toString(), lans);
  return lans;
}

export function findLans(nodes: Record<string, Set<string>>) {
  const lans = new Set<string>();
  const keys = Object.keys(nodes);

  for (const key of keys) {
    findLansForNodes([key], nodes).forEach((lan) => lans.add(lan));
  }

  return lans;
}
