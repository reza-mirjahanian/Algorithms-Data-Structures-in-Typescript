
// }
const findCells = (arr: number[][], i: number, j: number) => {
  let sum = 0
  //take the first three elements and add them
  sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
  //take the 1 indexed element from the second array
  sum += arr[i + 1][j + 1]
  //take the first three elements from the third and add them
  sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
  return sum
}

function hourglassSum(arr: number[][]) {
  // let max = -Infinity
  let max = -64
  if(arr && Array.isArray(arr)){
      for (let i = 0; i < arr.length - 2; i++) {
          for (let j = 0; j < arr[i].length - 2; j++) {
              const tmpSum = findCells(arr, i, j);
              if (tmpSum > max) max = tmpSum;
          }
      }
  }

  return max
}

const matrix = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
]
console.log(hourglassSum(matrix));

console.log(hourglassSum([
  [1, 2, 3, 0, 0],
  [0, 0, 0, 0, 0],
  [2, 1, 4, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0]
]));
