class Graph {
  private vertices: string[];
  private adjacent: Record < string, string[] > ;
  private edges: number;
  constructor() {
    this.vertices = [];
    this.adjacent = {};
    this.edges = 0;
  }

  addVertex(v: string) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }

  addEdge(v: string, w: string) {
    this.adjacent[v].push(w);
    this.adjacent[w].push(v);
    this.edges++;
  }
  neighbors(v: string) {
    return this.adjacent[v];
  }
}

const g = new Graph();

g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");
g.addVertex("5");
g.addVertex("6");


g.addEdge("1", "2");
g.addEdge("1", "3");
g.addEdge("3", "5");
g.addEdge("2", "5");
g.addEdge("2", "4");
g.addEdge("4", "5");
g.addEdge("4", "6");
g.addEdge("5", "6");


console.log(g.neighbors("1"))
console.log(g.neighbors("2"))
console.log(g.neighbors("3"))
console.log(g.neighbors("4"))
console.log(g.neighbors("5"))
console.log(g.neighbors("6"))

function graphBFS(graph: Graph, start: string) {
  const queue = [start],
    visited = new Set(queue);
  while (queue.length) {
    const shifted = queue.shift();
    console.log({
      shifted
    })
    if (shifted) {
      for (const item of graph.neighbors(shifted)) {
        if (!visited.has(item)) {
          queue.push(item);
          visited.add(item);
        }
      }
    }

  }
}


graphBFS(g, "1");
