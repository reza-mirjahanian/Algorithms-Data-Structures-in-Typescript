const numTable: Record < number, number > = {};
function root(num: number){
    while (numTable[num] != num) {
        num = numTable[num];
    }
    return num;
}
function maxCircle(queries: number[][]) {
  const output = [];
  const sizeTable: Record < number, number > = {};
  let maxSize = 0;

  for (let current of queries) {
    const n1 = current[0];
    const n2 = current[1];
    if (!numTable[n1]) {
      numTable[n1] = n1;
      sizeTable[n1] = 1;
    }
    if (!numTable[n2]) {
      numTable[n2] = n2;
      sizeTable[n2] = 1;
    }
    const n1Root = root(n1);
    const n2Root = root(n2);
    if (n1Root != n2Root) {
      if (sizeTable[n1Root] > sizeTable[n2Root]) {
        sizeTable[n1Root] += sizeTable[n2Root];
        numTable[n2Root] = numTable[n1Root];
      } else {
        sizeTable[n2Root] += sizeTable[n1Root];
        numTable[n1Root] = numTable[n2Root];
      }
    }
    maxSize = Math.max(sizeTable[n1Root], sizeTable[n2Root], maxSize);
    output.push(maxSize);
  }
  return output;
}

console.log(maxCircle([[1000000000, 23], [11, 3778], [7, 47], [11, 1000000000]]))
