function maxRegion(grid: number[][]) {
  // Write your code here
  class Graph {
    adjacencyList: Record < string, string[] > ;
    constructor(grid: number[][]) {
      this.adjacencyList = {};
      this.generateAdjacencyList(grid);
    }

    generateAdjacencyList(grid: number[][]) {
      for (let row = 0, n = grid.length; row < n; row++) {
        for (let col = 0, m = grid[row].length; col < m; col++) {
          const vertexName = this.getName(row, col);
          this.addVertex(vertexName);
          // Only add edge if a 1
          if (grid[row][col] !== 0) {
            this.addEdges(vertexName, row, col, grid);
          }
        }
      }
    }

    addVertex(vertex: string) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(vertex1: string, vertex2: string) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
      }
    }

    addEdges(vertexName: string, row: number, col: number, grid: number[][]) {
      for (let i = row - 1; i < row + 2; i++) {
        // See if row exists
        if (i > -1 && grid[i] && grid[i].length > 0) {
          for (let j = col - 1; j < col + 2; j++) {
            // See if col exists
            if (j > -1 && grid[i][j]) {
              const currentVertexName = this.getName(i, j);
              // Only add 1 and don't add self
              if (currentVertexName !== vertexName && grid[i][j] === 1) {
                this.addEdge(vertexName, currentVertexName);
              }
            }
          }
        }
      }
    }

    getName(row: number, col: number): string {
      return `${row}-${col}`;
    }

    dfs(start: string) {
      let result = 0;
      const stack = [];
      const visited: Record < string, boolean > = {};
      stack.push(start);
      visited[start] = true;

      while (stack.length) {
        const current = stack.pop() as string;
        if (current) {
          if (this.adjacencyList[current].length > 0) {
            result++;

            for (let neighbor of this.adjacencyList[current]) {
              if (!visited[neighbor]) {
                stack.push(neighbor);
                visited[neighbor] = true;
              }
            }
          }

        }

      }

      return result;
    }
  }

  const graph = new Graph(grid);

  let max = 1;

  for (let vertex in graph.adjacencyList) {
    max = Math.max(max, graph.dfs(vertex));
  }

  return max;
}

console.log(maxRegion([ [ 1, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 0, 0, 1, 0 ], [ 1, 0, 0, 0 ] ]))
