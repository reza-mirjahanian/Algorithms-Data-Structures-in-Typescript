function jumpingOnClouds(c: number[]): number {
  // Write your code here

  let total = 0,
    i = 0;
  while (i <= c.length) {
    if (!c[i + 2]) {
      i += 2;
    } else if (!c[i + 1]) {
      i += 1;
    }
    total++;
  }
  return total -1;
}
