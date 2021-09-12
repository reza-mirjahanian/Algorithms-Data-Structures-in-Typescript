function countingValleys(steps: number, path: string): number {
  // Write your code here
  const pathArray = path.split("");
  let c = 0;
  let l = 0;
  for (let step of pathArray) {
    if (step === "U") {
      l++;
    } else if (step === "D") {
      l--;
      if (l === -1) {
        c++;
      }
    }
  }

  return c
}
