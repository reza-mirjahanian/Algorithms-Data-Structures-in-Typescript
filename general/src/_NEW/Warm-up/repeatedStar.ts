function repeatedString(s: string, n: number): number {
  // Write your code here
  const stringLength = s.length;
  const charsArray = s.split('');
  let a = charsArray.filter((a) => a == 'a').length;

  let repeat = Math.floor(n / stringLength);

  let left = n - (repeat * stringLength);

  return (repeat * a) + charsArray.filter((a, i) => a == 'a' && i < left).length
}