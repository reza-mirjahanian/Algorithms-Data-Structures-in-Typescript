function dfs(node: number, adj: number[][], dp: number[], vis: boolean[]) {
  // Mark as visited
  vis[node] = true;

  // Traverse for all its children
  for (let i = 0; i < adj[node].length; i++) {
    // If not visited
    if (!vis[adj[node][i]])
      dfs(adj[node][i], adj, dp, vis);

    // Store the max of the paths
    dp[node] = Math.max(dp[node], 1 + dp[adj[node][i]]);
  }
}

// Function to add an edge
function addEdge(adj: number[][], u: number, v: number) {
  adj[u].push(v);
}

// Function that returns the longest path
function findLongestPath(adj: number[][], n: number) {
  // Dp array
  const dp = Array(n + 1).fill(0);

  // Visited array to know if the node
  // has been visited previously or not
  const vis = Array(n + 1).fill(false);

  // Call DFS for every unvisited vertex
  for (let i = 1; i <= n; i++) {
    if (!vis[i])
      dfs(i, adj, dp, vis);
  }

  let ans = 0;

  // Traverse and find the maximum of all dp[i]
  for (let i = 1; i <= n; i++) {
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

// Driver Code
const n = 5;
let adjDAG = Array.from(Array(n + 1), () => Array());
// Example-1
addEdge(adjDAG, 1, 2);
addEdge(adjDAG, 1, 3);
addEdge(adjDAG, 3, 2);
addEdge(adjDAG, 2, 4);
addEdge(adjDAG, 3, 4);
console.log(findLongestPath(adjDAG, n));
