function reverseShuffleMerge(s: string): string {
  // Write your code here
  const freqTable: Record < string, number > = {};
  let reversed = s.split('').reverse().join('');

  for (let item of reversed.split('')) {
    freqTable[item] = freqTable[item] ? freqTable[item] + 1 : 1;
  }


  let ref: Record < string, number > = {}
  for (let key in freqTable) {
    ref[key] = freqTable[key] / 2
  }

  let answers = [], i = 0;
  while (answers.length < reversed.length / 2) {
    let min_char_index = -1
    //find the smallest
    while (true) {
      let c = reversed[i];
      if (ref[c] > 0 && (min_char_index < 0 || c < reversed[min_char_index])) {
        min_char_index = i;
      }
      freqTable[c] -= 1;
      if (freqTable[c] < ref[c]) {
        break
      }
      i += 1
    }
    //found the one, restore the count of other
    for (let j = min_char_index + 1; j < i + 1; j++) {
      freqTable[reversed[j]] += 1
    }
    //find the smallest
    ref[reversed[min_char_index]] -= 1
    answers.push(reversed[min_char_index]);
    i = min_char_index + 1
  }
  return answers.join('');
}

console.log(reverseShuffleMerge('eggegg'))
