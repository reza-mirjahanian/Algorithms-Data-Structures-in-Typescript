console.log("###-- HTMLElements --###");

//
// String Challenge
// Have the function StringChallenge(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.
//
// If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.
// Examples
// Input: "<div><div><b></b></div></p>"
// Output: div
// Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
// Output: i



//This method not work correctly, for example: <div>abc</div><p><em><i>test test test</b></em></p>
function HTMLElements(str: string) {
  let openingTags = str.match(/<\w+>/g) || [];
  let closingTags = str.match(/(<\/\w+>)/g) || [];
  if (closingTags) {
    closingTags.reverse();
  }
  interface StringMap {
    [key: string]: string;
  }
  let strObj: StringMap = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<em>': '</em>',
    '<b>': '</b>',
  };

  // There might not be the same number of opening and closing tags
  const max = Math.max(openingTags.length, closingTags.length);

  for (let i = 0; i < max; i++) {
    let openingTag: string = openingTags[i];
    if (strObj[openingTag] !== closingTags[i]) {
      return (openingTag || closingTags[i]).replace(/[<>]/g, '');
    }
  }

  return true;
}


// This method not work correctly, for example: <p><div></p></div> return true!
function HTMLElements2(str: string) {
  let results: string[];
  results = str.match(/<\/?(\w+)>/g) || []; // Pull of Html tags

  interface StringMap {
    [key: string]: string;
  }
  let match: StringMap = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<b>': '</b>',
    '<i>': '</i>',
    '<em>': '</em>'
  };

  let tag: string[] = [];

  const reducerFnc = function(acc: string[], value: string, index: number, array: string[]) {
    if (index == array.length) { // end of Array
      return acc;
    }
    if (array.indexOf(match[value]) != -1) {
      array.splice(array.indexOf(match[value]), 1);
    } else {
      acc.push(value);
    }

    return acc;
  }
  results.reduce(reducerFnc, tag);
  // console.log(tag)
  if (!tag || tag.length === 0) {
    return true
  } else {

    return tag[0].replace("<", "").replace(">", "");
  }

}

function test(str: string) {
  const res = HTMLElements2(str);
  console.log(str, '\t--> ', res);
}

test("<div><div><b><b/></div></p>"); // "div" (closing a `div` with a `p`)
test("<p><div><b><b/></div></p>"); // "b" (because `<b/>` is invalid)
test("<p><div></p></div>"); // "p" (wrong order)
test("<p><div><b></b>"); // "p" (not closed at all)
test("<p><div></b></div></p>"); // "/b" (not opened)
test("<p><div><b></b></div></p>"); // true
test("<div><div><b></b></div></p>"); // p
test("<div>abc</div><p><em><i>test test test</b></em></p>"); //i
