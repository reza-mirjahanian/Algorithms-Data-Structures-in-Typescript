const count = (acc: number, next: number) => acc + next;
const matches = (val: string, i: number, arr: string[]) => {
  let count = 0;
  for (++i; i < arr.length; i++) {
    if (val == arr[i]) count++;
  }
  return count;
};

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams2(s: string) {
  let output = [];

  // get substring permutations
  for (let chunkSize = 1; chunkSize < s.length; chunkSize++) {
    let temp = [];

    // make array of sorted chunkSize substrings
    for (let i = 0; i <= s.length - chunkSize; i++) {
      temp.push(s.substr(i, chunkSize).split('').sort().join(''));
    }

    // count pairs
    temp = temp.map(matches)
    // add total
    output.push(temp.reduce(count));
  }

  return output.reduce(count)
}

console.log(sherlockAndAnagrams2('cdcd'))
