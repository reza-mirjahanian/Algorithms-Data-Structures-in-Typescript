function flippingBits(n: number): number {
  // Write your code here
  let numberStr = n.toString(2);
  let length = 32 - numberStr.length;
  let str = new Array(Math.abs(length) + 1).join('0');
  let bits = str + numberStr;
  let output = '';
  let number = 0;
  while (number < bits.length) {
    output += (bits[number] === '0') ? '1' : '0';
    number++;
  }
  return parseInt(output, 2);
}

console.log(flippingBits(2147483647))
