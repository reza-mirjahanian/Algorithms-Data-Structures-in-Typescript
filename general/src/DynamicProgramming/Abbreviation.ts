function abbreviation(a: string, b: string) {
  // Write your code here
  if (a.length < b.length) {
    return "NO";
  }
  const isUpperCase = (str: string) => {
    return str === str.toUpperCase()
  }

  let matrix: boolean[][] = Array.from(Array(a.length + 1), () => new Array(b.length + 1).fill(false));


  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (j > i) {
        matrix[i][j] = false;
      } else if (i == 0 && j == 0) {
        matrix[i][j] = true;
      } else if (j == 0) {
        matrix[i][j] = !isUpperCase(a.charAt(i - 1)) && matrix[i - 1][j];
      } else if (isUpperCase(a.charAt(i - 1))) {
        matrix[i][j] = a.charAt(i - 1) == b.charAt(j - 1) && matrix[i - 1][j - 1];
      } else {
        let tmp = (a.charAt(i - 1).toUpperCase() === b.charAt(j - 1)) && matrix[i - 1][j - 1];
        matrix[i][j] = (tmp || matrix[i - 1][j]);
      }
    }
  }

  return matrix[a.length][b.length] ? "YES" : "NO";
}

console.log(abbreviation('daBcd', 'ABC'))