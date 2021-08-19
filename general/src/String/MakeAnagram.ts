function makingAnagrams(a: string, b: string) {

  const chars = new Array(26).fill(0)
  a = a.toLowerCase();
  b = b.toLowerCase();

  const baseChar = 'a'.charCodeAt(0);
  for (let c of a) {
    chars[c.charCodeAt(0) - baseChar]++;
  }

  for (let c of b) {
    chars[c.charCodeAt(0) - baseChar]--;
  }

  let total = 0;
  for (let c of chars) {
    total += Math.abs(c);
  }

  return total;
}

console.log(makingAnagrams('bcadeh', 'hea'))
