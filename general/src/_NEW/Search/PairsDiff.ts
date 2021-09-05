function pairs(k: number, arr: number[]): number {
  // Write your code here
  let total = 0; // Initialize total
  let hashTable: Record < number, boolean > = {};

  for (let num of arr) {
    hashTable[num] = true;
  }

  for (let num of arr) {
    // num - (num - k ) = k
    if (num - k >= 0 && hashTable[num - k]) {
      total++;
    }

    // (num + k) - num = k
    if (num + k < Number.MAX_VALUE && hashTable[num + k]) {
      total++;
    }

    hashTable[num] = false;
  }
  return total;
}

//arr = [1, 5, 3, 4, 2]
// There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1].
console.log(pairs(2, [1, 5, 3, 4, 2]))
