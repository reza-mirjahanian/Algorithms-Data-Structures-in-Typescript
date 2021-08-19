function substrCount(n: number, s: string) {


  // store count of special Palindromic substring
  let result = 0;

  // it will store the count of continues same char
  let sameChar = [...Array(n)];

  let i = 0;

  // traverse string character from left to right
  while (i < n) {
    // store same character count
    let sameCharCount = 1;

    let j = i + 1;

    // count smiler character
    while (s[i] == s[j] && j < n) {
      sameCharCount++;
      j++;
    }

    // Case : 1
    // so total number of substring that we can
    // generate are : K *( K + 1 ) / 2
    // here K is sameCharCount
    result += (sameCharCount * (sameCharCount + 1)) / 2;

    // store current same char count in sameChar[]
    // array
    sameChar[i] = sameCharCount;

    // increment i
    i = j;
  }

  // Case 2: Count all odd length Special Palindromic
  // substring
  for (let j = 1; j < n; j++) {
    // if current character is equal to previous
    // one then we assign Previous same character
    // count to current one
    if (s[j] == s[j - 1]) sameChar[j] = sameChar[j - 1];

    // case 2: odd length
    if (
      j > 0 &&
      j < n - 1 &&
      s[j - 1] == s[j + 1] &&
      s[j] != s[j - 1]
    )
      result += Math.min(sameChar[j - 1], sameChar[j + 1]);
  }

  // subtract all single length substring
  return result - n;
}