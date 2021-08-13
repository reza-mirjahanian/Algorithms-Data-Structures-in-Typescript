function sherlockAndAnagrams3(s: string) {
  let anagrams = 0;
  for (let x = 1; x < s.length + 1; x++) {
    const dictionary: Record < string, number > = {};

    for (let y = 0; y < s.length - x + 1; y++) {
      const string = s.substring(y, y + x).split('').sort().join('');
      dictionary[string] = (dictionary[string] || 0) + 1;
    }
    for (const key in dictionary) {
      const value = dictionary[key];
      anagrams += value * (value - 1) / 2;
    }

  }

  return anagrams;
}

console.log(sherlockAndAnagrams3('cdcd'))
