namespace DFS {
  class Graph {


    private adj: number[][];
    constructor(private V: number) {
      this.adj = new Array(V).fill([]);
    }

    AddEdge(v: number, w: number) {
      this.adj[v].push(w); // Add w to v's list.
    }

    DFSUtil(v: number, visited: boolean[]) {
      visited[v] = true;
      console.log(v + " ");

      // Recur for all the
      // vertices adjacent to this
      // vertex
      for (const n of this.adj[v]) {
        if (!visited[n]) this.DFSUtil(n, visited);
      }
    }



    //disconnected
    DFS() {

      const visited = new Array(this.V).fill(false);


      // all vertices one by one
      for (let i = 0; i < this.V; ++i)
        if (visited[i] == false) {
          this.DFSUtil(i, visited);
        }
    }
  }


  const g = new Graph(4);

  g.AddEdge(0, 1);
  g.AddEdge(0, 2);
  g.AddEdge(1, 2);
  g.AddEdge(2, 0);
  g.AddEdge(2, 3);
  g.AddEdge(3, 3);



  g.DFS();

}