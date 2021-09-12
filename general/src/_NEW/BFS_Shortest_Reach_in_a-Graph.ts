//
// public static class Graph {
//
//     private List<List<Integer>> adjacencyList;
//     int V;
//
//     public Graph(int length) {
//     this.V = length;
//     adjacencyList = new ArrayList();
//     for(int i=0; i < V; i++) {
//     adjacencyList.add(new ArrayList());
// }
// }
//
// public void addEdge(int first, int second) {
//     adjacencyList.get(first).add(second);
//     adjacencyList.get(second).add(first);
// }
//
// public int[] shortestReach(int startId) { // 0 indexed
//
//     boolean[] visited = new boolean[V];
//     int[] distanceTo = new int[V];
//     Arrays.fill(distanceTo, -1);
//
//     Deque<Integer> queue = new ArrayDeque();
//     queue.add(startId);
//     visited[startId] = true;
//     distanceTo[startId] = 0;
//
//     while(!queue.isEmpty()){
//         int v = queue.poll();
//         for(int w : adjacencyList.get(v)){
//             if(!visited[w]){
//                 visited[w] = true;
//                 distanceTo[w] = distanceTo[v] + 6;
//                 queue.add(w);
//             }
//         }
//     }
//
//     return distanceTo;
// }
// }

'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;
// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });
//
// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';
//     main();
// });
//
// function readLine(): string {
//     return inputLines[currentLine++];
// }
//
// function getDistances(start: number, adj: Map<number, number[]>): number[]{
//     const visited = new Set();
//     const distances = new Array(adj.size).fill(-1, 0);
//     const queue = [start];
//     const distQueue = [0];
//
//     while(queue.length > 0){
//         const curr = queue.shift() || -1;
//         const currDist = distQueue.shift();
//
//         distances[curr - 1] = currDist;
//
//         for(let v of adj.get(curr)){
//             if(!visited.has(v)){
//                 queue.push(v);
//                 distQueue.push(currDist + 6);
//                 visited.add(v);
//             }
//         }
//     }
//
//     distances.splice(start - 1, 1);
//     return distances;
// }
//
// function main() {
//     let q = parseInt(readLine());
//     for(let i = 0; i < q; i += 1){
//         const [n, m] = readLine().split(" ").map(s => parseInt(s));
//         let adj = new Map<number, number[]>();
//         for(let j = 1; j <= n; j += 1){
//             adj.set(j, []);
//         }
//
//         for(let j = 0; j < m; j += 1){
//             const [s, e] = readLine().split(" ").map(s => parseInt(s));
//             adj.get(s).push(e);
//             adj.get(e).push(s);
//         }
//
//         let start = parseInt(readLine())
//
//         console.log(getDistances(start, adj).join(" "));
//     }
// }
