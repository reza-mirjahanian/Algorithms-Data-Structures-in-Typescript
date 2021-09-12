function findShortest(graphNodes: number, graphFrom: number[], graphTo: number[], ids: number[], val: number) {
  class Node {
    data: number;
    next: Node | null;
    constructor(value: number) {
      this.data = value;
      this.next = null;
    }
  }

  class Stack {
    private first: Node | null;
    private last: Node | null;
    size: number;
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(val: number) {
      let newNode = new Node(val);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        if (this.last) {
          this.last.next = newNode;
          this.last = newNode;

        }
      }
      return this.size++;
    }

    dequeue() {
      if (!this.first) return null;

      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.data;
    }
  }

  class Graph {
    private ids: number[];
    private adjacencyList: Record < number, number[] > ;
    constructor(ids: number[]) {
      this.ids = ids;
      this.adjacencyList = {};
    }

    vertex(vertex: number) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    edge(v1:number, v2: number) {
      if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
      }
    }

    find(start: number) {
      const visited: Record < number, boolean > = {};
      let queue = new Stack();
      let distance = 1;
      queue.enqueue(start);
      visited[start] = true;

      while (queue.size) {
        const vertex = queue.dequeue() || -1;
        const neighbors = new Stack();

        for (let neighbour of this.adjacencyList[vertex]) {
          if (!visited[neighbour]) {
            visited[neighbour] = true;
            neighbors.enqueue(neighbour);

            if (this.ids[start - 1] === this.ids[neighbour - 1]) {
              return distance;
            }
          }
        }

        distance++;
        queue = neighbors;
      }

      return -1;
    }
  }

  // Undirected graph
  const graph = new Graph(ids);

  // Generate the graph
  for (let i = 0, n = graphFrom.length; i < n; i++) {
    // Add the vertex if it doesn't exist
    graph.vertex(graphFrom[i]);
    graph.vertex(graphTo[i]);
    graph.edge(graphFrom[i], graphTo[i]);
  }

  const output = [];
  for (let j = 0, n = ids.length; j < n; j++) {
    if (ids[j] === val) {
      const result = graph.find(j + 1);
      if (result > 0) {
        output.push(result);
      }
    }
  }

  return output.length < 1 ? -1 : Math.min(...output);
}

// console.log(findShortest(5,[1, 2, 2, 3],[2, 3, 4, 5],[1,2,3, 1,3], 1))
console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 1, 1], 1))
