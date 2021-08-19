// A Bipartite Graph is a graph whose vertices can be divided into two independent sets, U and V such that every edge (u, v) either connects a vertex from U to V or a vertex from V to U. In other words, for every edge (u, v), either u belongs to U and v to V, or u belongs to V and v to U. We can also say that there is no edge that connects vertices of same set.
const V_BiPart = 4;

function colorGraph(G: number[][], colors: number[], pos: number, c : number): boolean {
    if (colors[pos] != -1 && colors[pos] != c) return false;

    // colors this pos as c and
    // all its neighbours as 1-c
    colors[pos] = c;
    let ans = true;
    for (let i = 0; i < V_BiPart; i++) {
        if (G[pos][i] == 1) {
            if (colors[i] == -1) {
                ans &&= colorGraph(G, colors, i, 1 - c);
            }
            if (colors[i] != -1 && colors[i] != 1 - c) return false;
        }
        if (!ans) return false;
    }
    return true;
}

function isBipartite(G: number[][]) {
    const color = new Array(V_BiPart).fill(-1);
    const pos = 0;

    // two colors 1 and 0
    return colorGraph(G, color, pos, 1);
}

// Driver Code
const G = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
];
console.log(isBipartite(G))
