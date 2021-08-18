// recStack stands for ‘recursion stack’, and it’s what’s keeping track of the back edges, the vertices we visited to get us to our current vertex.
class DetectCycle {
  private adj: number[][];
  constructor(private V: number) {
    this.adj = new Array(V).fill([]);
  }

  addEdge(source: number, dest: number) {
    this.adj[source].push(dest);
  }

  isCyclic() {
    // Mark all the vertices as not visited and not part of recursion stack
    let visited = new Array(this.V);
    let recStack = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      visited[i] = false;
      recStack[i] = false;
    }


    // Call the recursive helper function to
    // detect cycle in different DFS trees
    for (let i = 0; i < this.V; i++)
      if (this.isCyclicUtil(i, visited, recStack))
        return true;

    return false;
  }

  isCyclicUtil(i: number, visited: boolean[], recStack: boolean[]) {
    // Mark the current node as visited and
    // part of recursion stack
    if (recStack[i])
      return true;

    if (visited[i])
      return false;

    visited[i] = true;

    recStack[i] = true;
    let children = this.adj[i];

    for (let c = 0; c < children.length; c++)
      if (this.isCyclicUtil(c, visited, recStack))
        return true;

    recStack[i] = false;

    return false;
  }
}





// Driver code
const DC = new DetectCycle(4);
DC.addEdge(0, 1);
DC.addEdge(0, 2);
DC.addEdge(1, 2);
DC.addEdge(2, 0);
DC.addEdge(2, 3);
DC.addEdge(3, 3);

console.log(DC.isCyclic())
