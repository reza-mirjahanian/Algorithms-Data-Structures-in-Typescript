class Graph {
  private V: number; // No. of vertices

  // Adjacency List
  private adj: number[][];

  // Constructor
  constructor(v: number) {
    this.V = v;
    this.adj = new Array(v);
    // new Array(v).fill([]);@todo this makes error, copy by ref
    for (let i = 0; i < v; i++){
      this.adj[i] = [];
    }
  }
  // Function to add an edge into the graph
  addEdge(v: number, w: number) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  // A recursive function that uses visited[]
  // and parent to detect cycle in subgraph
  // reachable from vertex v.
  isCyclicUtil(v: number, visited: boolean[], parent: number): boolean {
    // Mark the current node as visited
    visited[v] = true;

    // Recur for all the vertices adjacent to this vertex
    for (let i of this.adj[v]) {
      // If an adjacent is not visited, then recur for that adjacent
      if (!visited[i]) {
        if (this.isCyclicUtil(i, visited, v))
          return true;
      }

      // If an adjacent is visited and not parent of current vertex,then there is a cycle.
      else if (i != parent)
        return true;
    }
    return false;
  }

  // Returns true if the graph contains
  // a cycle, else false.
  isCyclic(): boolean {
    // Mark all the vertices as not visited
    // and not part of recursion stack
    let visited: boolean[] = new Array(this.V).fill(false);

    // Call the recursive helper function
    // to detect cycle in different DFS trees
    for (let u = 0; u < this.V; u++){
      if (!visited[u])
        if (this.isCyclicUtil(u, visited, -1))
          return true;
    }
    // Don't recur for u if already visited

    return false;
  }

}

let g1 = new Graph(5);
g1.addEdge(1, 0);
g1.addEdge(0, 2);
g1.addEdge(2, 1);
g1.addEdge(0, 3);
g1.addEdge(3, 4);
console.log(g1.isCyclic())

let g2 = new Graph(3);
g2.addEdge(0, 1);
g2.addEdge(1, 2);


console.log(g2.isCyclic())
