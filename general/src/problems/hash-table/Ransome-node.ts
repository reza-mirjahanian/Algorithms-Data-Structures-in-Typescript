function checkMagazine(magazine: string[], note: string[]) {
  // Write your code here
  const dic: Record < string, number > = {};
  for (let m of magazine) {
    if (!dic[m]) {
      dic[m] = 0;
    }
    dic[m]++;
  }
  for (let n of note) {
    if (!dic[n]) {
      console.log('No')
      return
    } else {
      dic[n]--;
      if (dic[n] < 0) {
        console.log('No')
        return
      }
    }

  }
  console.log('Yes')

}


console.log(checkMagazine(["give", "me", "one", "grand", "today", "night"], ["give", "one", "one", "grand", "today"]))