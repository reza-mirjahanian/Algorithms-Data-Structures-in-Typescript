// the minimum number of dice throws required to reach

class QEntry {
  dist: number;
  v: number;
  constructor() {
    this.v = 0;
    this.dist = 0;
  }
}

// This function returns minimum number of dice
// throws required to Reach last cell from 0'th cell
// in a snake and ladder game. move[] is an array of
// size N where N is no. of cells on board If there
// is no snake or ladder from cell i, then move[i]
// is -1 Otherwise move[i] contains cell to which
// snake or ladder at i takes to.
function getMinDiceThrows(move: number[], n: number) {
  let visited = new Array(n).fill(false);

  let q = [];
  let qe = new QEntry();
  qe.v = 0;
  qe.dist = 0;

  // Mark the node 0 as visited and enqueue it.
  visited[0] = 1;
  q.push(qe);

  // Do a BFS starting from vertex at index 0
  while (q.length != 0) {

    qe = q.shift() !;

    if (qe) {
      let v = qe.v;

      // If front vertex is the destination
      // vertex, we are done
      if (v == n - 1)
        break;

      // Otherwise dequeue the front vertex and
      // enqueue its adjacent vertices (or cell
      // numbers reachable through a dice throw)
      for (let j = v + 1; j <= (v + 6) && j < n; ++j) {
        // If this cell is already visited, then ignore
        if (visited[j] == 0) {
          // Otherwise calculate its distance and
          // mark it as visited
          let a = new QEntry();
          a.dist = (qe.dist + 1);
          visited[j] = 1;

          // Check if there a snake or ladder at 'j'
          // then tail of snake or top of ladder
          // become the adjacent of 'i'
          if (move[j] != -1)
            a.v = move[j];
          else
            a.v = j;
          q.push(a);
        }
      }
    }

  }

  // We reach here when 'qe' has last vertex
  // return the distance of vertex in 'qe'
  return qe.dist;
}

// Let us construct the board given in above diagram
let N = 30;
let moves = new Array(N).fill(-1);

// Ladders
moves[2] = 21;
moves[4] = 7;
moves[10] = 25;
moves[19] = 28;

// Snakes
moves[26] = 0;
moves[20] = 8;
moves[16] = 3;
moves[18] = 6;

console.log("Min Dice throws required is " + getMinDiceThrows(moves, N));
