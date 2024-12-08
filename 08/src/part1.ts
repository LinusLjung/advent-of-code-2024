import Grid, { type Node } from 'Grid';

function findAntiNodes(node: Node, nodes: Node[]) {
  return nodes
    .filter((n) => n.type === node.type && n.cell.toString() !== node.cell.toString())
    .map((n) => {
      const rDiff = n.cell[0] - node.cell[0];
      const cDiff = n.cell[1] - node.cell[1];

      return [n.cell[0] + rDiff, n.cell[1] + cDiff];
    });
}

export function part1(input: string) {
  const grid = new Grid(input);
  const nodes = grid.findNodes();
  const antiNodes = new Set<string>();

  for (const node of nodes) {
    findAntiNodes(node, nodes)
      .filter((node) => node[0] >= 0 && node[0] < grid.grid.length && node[1] >= 0 && node[1] < grid.grid[0].length)
      .forEach((node) => antiNodes.add(node.toString()));
  }

  return antiNodes.size;
}
