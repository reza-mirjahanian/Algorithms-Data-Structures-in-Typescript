function _generateSubstrings(str: string) {
  let i, j, result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j))
    }
  }
  return result
}

function countAnagrams(currentIndex: number, arr: string[]) {
  const element = arr[currentIndex]
  const rest = arr.slice(currentIndex + 1)
  let counter = 0

  for (let i = 0; i < rest.length; i++) {
    if (element.length === rest[i].length && isAnagram(element, rest[i])) {
      counter++
    }
  }

  return counter
}

function isAnagram(str1: string, str2: string) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function _hasDuplicate(s: string){
  const array = s.split('');
  return (new Set(array)).size !== array.length;
}

function sherlockAndAnagrams(s: string) {
  if (!_hasDuplicate(s)) return 0;

  let anagramsCount = 0
  const substrings = _generateSubstrings(s)

  for (let i = 0; i < substrings.length; i++) {
    anagramsCount += countAnagrams(i, substrings)
  }
  return anagramsCount
}


console.log(sherlockAndAnagrams('cdcd'))
