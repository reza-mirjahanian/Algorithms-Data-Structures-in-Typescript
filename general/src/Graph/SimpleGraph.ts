//#geeksforgeeks
// A graph is a data structure that consists of the following two components:
// 1. A finite set of vertices also called as nodes.
// 2. A finite set of ordered pair of the form (u, v) called as edge. The pair is ordered because (u, v) is not the same as (v, u) in case of a directed graph(di-graph). The pair of the form (u, v) indicates that there is an edge from vertex u to vertex v. The edges may contain weight/value/cost.
// Graphs are used to represent many real-life applications: Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook.

// The following two are the most commonly used representations of a graph.
// 1. Adjacency Matrix
// 2. Adjacency List

// Adjacency matrix for undirected graph is always symmetric.
// There are pros and cons to each representation . Generally speaking, graphs with lots of edges fare better as matrices and graphs with fewer edges fare better as lists. Adjacency lists tend to be more common, and its what we’ll use today.

// undirected graph
function addEdge(adj: number[][], u: number, v: number) {
  adj[u].push(v);
  adj[v].push(u);
}

function printGraph(adj: number[][]) {
  for (let i = 0; i < adj.length; i++) {
    console.log("Adjacency list of vertex :" + i);
    for (let j = 0; j < adj[i].length; j++) {
      console.log(" -> " + adj[i][j]);
    }
  }
}

let V = 5;
let adj = [];

for (let i = 0; i < V; i++)
  adj.push([]);

// Adding edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 4);
addEdge(adj, 1, 2);
addEdge(adj, 1, 3);
addEdge(adj, 1, 4);
addEdge(adj, 2, 3);
addEdge(adj, 3, 4);


printGraph(adj);
