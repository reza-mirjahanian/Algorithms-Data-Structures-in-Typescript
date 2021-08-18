// The topological sort algorithm takes a directed graph and returns an array of the nodes where each node appears before all the nodes it points to.
//
//     The ordering of the nodes in the array is called a topological ordering.
// cyclic graphs don't have valid topological orderings.

// We can modify DFS to find Topological Sorting of a graph. In DFS, we start from a vertex, we first print it and then recursively call DFS for its adjacent vertices. In topological sorting, we use a temporary stack. We don’t print the vertex immediately, we first recursively call topological sorting for all its adjacent vertices, then push it to a stack. Finally, print contents of the stack. Note that a vertex is pushed to stack only when all of its adjacent vertices (and their adjacent vertices and so on) are already in the stack.

class GraphTopo {

  private V: number; // No. of vertices

  // Adjacency List
  private adj: number[][];

  // Constructor
  constructor(v: number) {
    this.V = v;
    this.adj = new Array(v);
    // new Array(v).fill([]);@todo this makes error, copy by ref
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  // Function to add an edge into the graph
  addEdge(v: number, w: number) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }


  // A recursive function used by topologicalSort
  TopologicalSortUtil(v: number, visited: boolean[], stack: number[]) {

    // Mark the current node as visited.
    visited[v] = true;

    // Recur for all the vertices
    // adjacent to this vertex
    for (let vertex of this.adj[v]) {
      if (!visited[vertex])
        this.TopologicalSortUtil(vertex, visited, stack);
    }

    // Push current vertex to
    // stack which stores result
    stack.push(v);
  }

  // The function to do Topological Sort.
  // It uses recursive topologicalSortUtil()
  TopologicalSort() {
    let stack: number[] = [];

    // Mark all the vertices as not visited
    let visited: boolean[] = new Array(this.V);

    // Call the recursive helper function
    // to store Topological Sort starting
    // from all vertices one by one
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.TopologicalSortUtil(i, visited, stack);
      }
    }

    // Print contents of stack
    for (let vertex of stack) {
      console.log(vertex + " ");
    }
  }

}

const topoSort = new GraphTopo(6);
topoSort.addEdge(5, 2);
topoSort.addEdge(5, 0);
topoSort.addEdge(4, 0);
topoSort.addEdge(4, 1);
topoSort.addEdge(2, 3);
topoSort.addEdge(3, 1);

console.log("Following is a Topological " + "sort of the given graph");


topoSort.TopologicalSort();
