function maximumToys(prices: number[], k: number): number {
  // Write your code here
  let total = 0;
  let toys = [];
  let sortedPrices = prices.sort((a, b) => a - b);
  for (let p of sortedPrices) {
    if (total + p <= k) {
      toys.push(p);
      total += p;
    } else {
      break
    }
  }
  return  toys.length
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
