// Input: dictionary[] = {"GEEKS", "FOR", "QUIZ", "GO"};
// boggle[][]   ={
// {'G', 'I', 'Z'},
// {'U', 'E', 'K'},
// {'Q', 'S', 'E'}
// };
// isWord(str): returns true if str is present in dictionary else false.
//
//     Output:  Following words of dictionary are present
// GEEKS
// QUIZ

// Let the given dictionary be following
const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
const dic_length = dictionary.length;
const M = 3,
  N_Boogle = 3;

// A given function to check if a given string
// is present in dictionary. The implementation is
// naive for simplicity. As per the question
// dictionary is given to us.
function isWord(str: string) {

  // Linearly search all words
  for (let i = 0; i < dic_length; i++)
    if (str == dictionary[i]) return true;
  return false;
}

// A recursive function to print all words present on boggle
function findWordsUtil(boggle: string[][], visited: boolean[][], i: number, j: number, str: string) {

  // Mark current cell as visited and
  // append current character to str
  visited[i][j] = true;
  str = str + boggle[i][j];

  // If str is present in dictionary,
  // then print it
  if (isWord(str)) console.log(str );

  // Traverse 8 adjacent cells of boggle[i,j]
  for (let row = i - 1; row <= i + 1 && row < M; row++)
    for (let col = j - 1; col <= j + 1 && col < N_Boogle; col++)
      if (row >= 0 && col >= 0 && !visited[row][col])
        findWordsUtil(boggle, visited, row, col, str);


  // mark visited of current cell as false

  visited[i][j] = false;
}

// Prints all words present in dictionary.
function findWords(boggle: string[][]) {

  // Mark all characters as not visited
  let visited = Array.from(Array(M), () => new Array(N_Boogle).fill(0));

  // Initialize current string
  let str = "";

  // Consider every character and look for all words
  // starting with this character
  for (let i = 0; i < M; i++)
    for (let j = 0; j < N_Boogle; j++) findWordsUtil(boggle, visited, i, j, str);
}

// Driver Code
const boggle = [
  ["G", "I", "Z"],
  ["U", "E", "K"],
  ["Q", "S", "E"],
];

console.log("Following words of " + "dictionary are present");
findWords(boggle);
