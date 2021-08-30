function maxMin(k: number, arr: number[]): number {
  // Write your code here
  arr.sort((a, b) => a - b); //10, 20, 30,

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= arr.length - k; i++) {
    min = Math.min(arr[i + k - 1] - arr[i], min);
  }

  return min;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]))
