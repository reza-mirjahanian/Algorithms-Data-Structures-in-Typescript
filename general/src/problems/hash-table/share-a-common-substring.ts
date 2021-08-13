function twoStrings(s1: string, s2: string) {
  const chars = s1.split('');
  const tableS1 = new Set(chars);
  for (let char of s2) {
    if (tableS1.has(char)) {
      // console.log('Yes')
      return 'YES';
    }
  }
  // console.log('No')
    return 'NO';

}


console.log(twoStrings('hello', 'world'))
