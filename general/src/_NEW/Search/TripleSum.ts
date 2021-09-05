function triplets(a: number[], b: number[], c: number[]) {

  a = Array.from(new Set(a.sort((a, b) => a - b)));
  b = Array.from(new Set(b.sort((a, b) => a - b)));
  c = Array.from(new Set(c.sort((a, b) => a - b)));


  let ai = 0;
  let ci = 0;

  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    while (ai < a.length && a[ai] <= b[i]) {
      ai++;
    }
    while (ci < c.length && c[ci] <= b[i]) {
      ci++;
    }
    sum += ai * ci;
  }
  return sum;
}

console.log(triplets([1 ,3 ,5, 7], [5, 7, 9], [7 ,9, 11, 13]))
