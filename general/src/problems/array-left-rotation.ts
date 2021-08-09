function leftArray(a: number[], d: number) {

  for (let i = 0; i < d; i++) {
    const left = a.shift();
    if (left !== undefined) {
      a.push(left)
    }
  }
  return a;

}

console.log(leftArray([5, 1, 2, 3, 4], 4))
