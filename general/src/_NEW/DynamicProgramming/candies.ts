function candies(n: number, arr: number[]) {
  // Write your code here
  let matrix = new Array(n);
  matrix[0] = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      matrix[i] = 1 + matrix[i - 1];
    } else if (arr[i] == arr[i - 1]) {
      matrix[i] = 1;
    } else {
      matrix[i] = 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1] && matrix[i] <= matrix[i + 1]) {
      matrix[i] = 1 + matrix[i + 1];
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += matrix[i];
  }
  return sum;


}

console.log(candies(6, [4, 6, 4, 5, 6, 2]))
