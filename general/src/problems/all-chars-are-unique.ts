console.log("###-- All chars is unique --###");


function isAllCharsUnique(str: string) {
  return (new Set(str)).size === str.length
}

console.log(isAllCharsUnique('aasssbbbb'));
console.log(isAllCharsUnique('asb'));