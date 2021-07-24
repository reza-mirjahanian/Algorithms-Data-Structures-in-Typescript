console.log("###-- Simple Compress String  --###");

//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
function simpleCompressString (str: string) {
  let newStringArr = [];

  for(let i=0; i<str.length; i++){
    let j = i + 1;
    let counter = 1;
    while(str.charAt(i) === str.charAt(j)){
      counter++;
      j++;
      i++;
    }
    let valueToPush = counter === 1 ? str.charAt(i) : str.charAt(i) + counter;
    newStringArr.push(valueToPush);
  }

  let newStr = newStringArr.join('');
  return newStr.length === str.length ? str : newStr;
}



console.log(simpleCompressString('avraam'));
console.log(simpleCompressString('aaavraam'));
console.log(simpleCompressString('avram'));


