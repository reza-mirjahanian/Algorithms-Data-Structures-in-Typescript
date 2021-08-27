function balancedForest(c: number[], edges: number[][]) {
  // Write your code here
  class Node {
    cost;
    dfsVisited: boolean;
    solveVisited: boolean;
    adjacent: number[];
    constructor(cost: number) {
      this.cost = cost;
      this.dfsVisited = false;
      this.solveVisited = false;
      this.adjacent = [];
    }
  }

  // s has sums encountered during depth first search excluding those from the root to the current node.
  // q has sums encountered during depth first search from the root to current node.
  function solve(idx: number, nodes: Node[]) {
    let node = nodes[idx];
    if (node.solveVisited)
      return;

    node.solveVisited = true;
    let x = [2 * node.cost, 2 * sum - 4 * node.cost, sum - node.cost];
    let y = [3 * node.cost - sum, (sum - node.cost) / 2 - node.cost];

    // If removing the edge above the current node (node variable defined at the top of this method)
    // gives two trees whose total values are the same, then the node we add should have that
    // same value too to get 3 trees (one of which is our single node that we added) with the same value.
    if (sum % 2 === 0 && node.cost === (sum / 2))
      mini = Math.min(mini, sum / 2);

    // case 1a: When two non-overlapping subtrees in the overall tree have the same total value.
    if (s.has(node.cost)) { // ||                      // case 1a
      //                q.has(2*node.cost) ) {                  // ?
      if (y[0] >= 0)
        mini = Math.min(mini, y[0]);
    }

    // case 1b: (part B): Two non-overlapping subtrees in the overall tree.
    // case 2b: One edge to be removed is below the other edge to be removed in the overall tree.
    if (s.has(sum - 2 * node.cost) || // case 1b (part B)
      q.has(sum - node.cost)) { // case 2b
      if (y[0] >= 0)
        mini = Math.min(mini, y[0]);
    }

    // case 1b: (part A): Two non-overlapping subtrees in the overall tree.
    // case 2a: One edge to be removed is below the other edge to be removed in the overall tree.
    if ((sum - node.cost) % 2 === 0) {
      if (s.has((sum - node.cost) / 2) || // case 1b (part A)
        q.has((sum + node.cost) / 2)) { // case 2a
        if (y[1] >= 0)
          mini = Math.min(mini, y[1]);
      }
    }

    q.add(node.cost);
    for (let i = 0; i < node.adjacent.length; i++) { // DFS!!
      solve(node.adjacent[i], nodes); // recursive call
    }

    q.delete(node.cost);
    s.add(node.cost);
  }

  function dfs(idx: number, nodes: Node[]) {
    let node = nodes[idx];
    if (node.dfsVisited)
      return 0;

    node.dfsVisited = true;
    for (let i = 0; i < node.adjacent.length; i++)
      node.cost += dfs(node.adjacent[i], nodes);

    return node.cost;
  }

  let s = new Set(),
    q = new Set();
  let nodes = [],
    node_values = c;
  for (let i = 0; i < node_values.length; i++)
    nodes.push(new Node(node_values[i]));

  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let idx0 = edge[0] - 1;
    let idx1 = edge[1] - 1;
    nodes[idx0].adjacent.push(idx1);
    nodes[idx1].adjacent.push(idx0);
  }

  const sum = dfs(0, nodes);
  let mini = sum;
  solve(0, nodes);
  return mini === sum ? -1 : mini;
}
