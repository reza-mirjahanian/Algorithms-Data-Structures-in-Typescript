function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let socks = new Set();
  let count = 0;
  for (let color of ar) {
    if (socks.has(color)) {
      count++;
      socks.delete(color);
    } else {

      socks.add(color);
    }
  }
  return count;
}
