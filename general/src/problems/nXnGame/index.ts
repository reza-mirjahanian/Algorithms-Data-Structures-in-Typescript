function isTrapped(arr: string[][], i: number, j: number, m: number, n: number, visited: boolean[][]) {
  let xAxis = [-1, 0, 1, 0];
  let yAxis = [0, 1, 0, -1];
  let sourceChar = arr[i][j];
  visited[i][j] = true;
  for (let k = 0; k < yAxis.length; k++) {
    let x = i + xAxis[k];
    let y = j + yAxis[k];
    if (isValidMove(arr, x, y, m, n) && !visited[x][y]) {
      if (arr[x][y] == sourceChar) {
        let result = isTrapped(arr, x, y, m, n, visited);
        if (result) {
          return true;
        }
      } else if (arr[x][y] == ' ') {
        return true;
      }
    }
  }
  return false;
}

function isValidMove(arr: string[][], x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}