function meanderingArray(unsorted: number[]) {
  // Write your code here
  unsorted.sort((a, b) => a - b)
  const output = [];

  while (unsorted.length > 0) {
    output.push(unsorted.pop())
    if (unsorted.length > 0) {
      output.push(unsorted.shift())
    }
  }
  return output;

}

console.log(meanderingArray([5, 2, 7, 8, -2, 25, 25]))