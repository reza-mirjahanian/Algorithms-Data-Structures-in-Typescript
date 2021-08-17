// Implement a Graph
// basic operations:
//  - add vertex (node)
//  - add edge (node -> node)
namespace Directed{

  class GraphNode {
    edges: Record < string, number > = {}
    constructor(val: number) {
      this.edges[val] = 1;
    }
  }

  class Graph {
    vertices: Record < string, GraphNode > = {};

    // O(1) operation
    addVertex(val: number) {
      if (!this.vertices[val]) {
        this.vertices[val] = new GraphNode(val);
      }
    }

    // O(E) operation - edges
    removeVertex = (val: number) => {
      if (this.vertices[val]) {
        // once you remove a vertex, you need to remove all edges pointing
        // to the vertex.

        for (let key in this.vertices) {
          if (this.vertices[key].edges[val]) {
            delete this.vertices[key].edges[val];
          }
        }
        delete this.vertices[val];



      }
    }

    // O(1) operation
    getVertex(val: number) {
      return this.vertices[val];
    }


    // O(1) operation
    addEdge(start: number, end: number) {
      // check to see if vertices exists.
      // if it exists, set the edges and be done.
      if (this.vertices[start] && this.vertices[end]) {

        // check to see if edge exists, if it does, increment it's weight
        if (this.vertices[start].edges[end]) {
          this.vertices[start].edges[end] += 1;
        } else {

          // edge does not exist, set weight to 1.
          this.vertices[start].edges[end] = 1;
        }
      }
    }

    // O(1) operation
    removeEdge(start: number, end: number) {
      if (this.vertices[start] && this.vertices[end]) {
        if (this.vertices[start].edges[end]) {
          delete this.vertices[start].edges[end];
        }
      }
    }

    // O(1) operation
    getEdge(start: number, end: number) {
      return this.vertices[start].edges[end] || null;
    }

    neighbors(val: number) {
      const output: number[] = [];
      if (this.vertices[val]) {
        Object.keys(this.vertices[val].edges).forEach((v) => {
          if (v && v !== String(val)) {
            output.push(Number(v))
          }
        });
      }
      return output;

    }

    printGraph() {
      console.log(this.vertices);
      // for (let v in this.vertices) {
      //   console.log("Adjacency list of vertex :" + v);
      //   console.log(this.vertices[v])
      // }
    }
  }


  let graph = new Graph();

  graph.addVertex(5);
  graph.addVertex(2);
  graph.addVertex(6);
  graph.addVertex(7);
  graph.addEdge(2, 5);
  graph.addEdge(6, 7);
  graph.addEdge(7, 5);

  graph.printGraph()
  console.log('-------- Directed Graph -------')
  console.log(graph.getEdge(5, 7));
  console.log(graph.getEdge(7, 5));
  console.log(graph.neighbors(7));

  console.log('-------- Directed Graph: BFS -------')



}

