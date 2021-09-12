function primality(n: number): string {
  // Write your code here
  if (n === 1){
    return "Not prime";
  }
  for (let num = 2; num <= Math.sqrt(n); num++) {
    if (n % num == 0){
      return "Not prime";
    }
  }
  return "Prime";
}
