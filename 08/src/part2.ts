import Grid, { type Cell, type Node } from 'Grid';

function findAntiNodes(node: Node, nodes: Node[], grid: Grid) {
  return nodes
    .filter((n) => n.type === node.type && n.cell.toString() !== node.cell.toString())
    .flatMap((n) => {
      const rDiff = n.cell[0] - node.cell[0];
      const cDiff = n.cell[1] - node.cell[1];
      const nodes: Cell[] = [];

      for (
        let r = n.cell[0], c = n.cell[1], i = 0;
        r < grid.height && r >= 0 && c < grid.width && c >= 0;
        r = r + rDiff, c = c + cDiff
      ) {
        nodes.push([r, c]);
      }

      for (
        let r = n.cell[0], c = n.cell[1], i = 0;
        r < grid.height && r >= 0 && c < grid.width && c >= 0;
        r = r - rDiff, c = c - cDiff
      ) {
        nodes.push([r, c]);
      }

      return nodes;
    });
}

export function part2(input: string) {
  const grid = new Grid(input);
  const nodes = grid.findNodes();
  const antiNodes = new Set<string>();

  for (const node of nodes) {
    findAntiNodes(node, nodes, grid).forEach((node) => antiNodes.add(node.toString()));
  }

  return antiNodes.size;
}
