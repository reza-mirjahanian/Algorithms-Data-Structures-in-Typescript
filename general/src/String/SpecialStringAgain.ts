function substrCount(n: number, s: string) {

  let count = n; // each char counts one
  let iSpecialCnt = 0,
    iCurrCount = 0,
    iPrevCount = 0,
    iPrevPrevCount = 0;

  for (let i = 1; i < n; i++) {
    let pre = s[i - 1];
    let current = s[i];

    if (pre === current) {
      iCurrCount++;
      count += iCurrCount;

      if (iSpecialCnt > 0) {
        iSpecialCnt--;
        count++;
      }
    } else {
      iCurrCount = 0;
      if (i > 1 && (s[i - 2] == current)) {
        iSpecialCnt = iPrevPrevCount;
        count++;
      } else {
        iSpecialCnt = 0;
      }
    }

    if (i > 1) {
      iPrevPrevCount = iPrevCount;
    }

    iPrevCount = iCurrCount;
  } //

  return count;
}

console.log(substrCount(5, 'aasaa'))
