function getMinimumCost(k: number, c: number[]) {
  let buy: number[][] = new Array(k).fill(0).map(x => []); // [[][][]]
  //most expensive to cheapest
  c.sort((a, b) => b - a)


  for (let i = 0; i < c.length; i++) {
    buy[i % k].push(c[i])
  }

  return buy.reduce((total_cost, friend_total) => {
    return total_cost + friend_total.reduce((total, cost, i) => {
      return total + (i + 1) * cost
    }, 0)
  }, 0)

}

// console.log(getMinimumCost(3, [2,5,6]))
console.log(getMinimumCost(3, [1, 3, 5, 7, 9]))
