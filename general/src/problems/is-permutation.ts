console.log("###-- is Permutation  --###");

// Time complexity: O(nlogn)
function isPermutation(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }
  return a.split("").sort().join() === b.split("").sort().join();
}

// Time complexity: O(n)
function isPermutation2(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  const letters: Record < string, number > = {},
    length = a.length;

  for (let x = 0; x < length; x++) {
    const l = a.charAt(x);
    letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
  }

  for (let y = 0; y < length; y++) {
    const m = b.charAt(y);
    letters[m]--;
  }

  for (let z in letters) {
    if (letters[z] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation('BALL', 'LALB'));
console.log(isPermutation("dog", "god"));
console.log(isPermutation2('BALL', 'LALB'));
console.log(isPermutation2("dog", "ogg"));