function number(n: number) {
  let level = 0;
  for (let i = 1; i <= 2 * n; i++) {
    let numberStr = i.toString();
    if (numberStr.indexOf('13') === -1 && numberStr.indexOf('4') === -1) {
      level += 1;
    }
    if (level === n) {
      return i;
    }
  }
}

console.log(number(12))