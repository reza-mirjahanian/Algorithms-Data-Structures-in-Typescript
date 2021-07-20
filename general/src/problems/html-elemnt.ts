console.log("###-- HTMLElements --###");


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

function test(str: string) {
  const res = HTMLElements(str);
  console.log(str, '\t--> ', res);
}

test("<div><div><b><b/></div></p>"); // "div" (closing a `div` with a `p`)
test("<p><div><b><b/></div></p>"); // "b" (because `<b/>` is invalid)
test("<p><div></p></div>"); // "p" (wrong order)
test("<p><div><b></b>"); // "p" (not closed at all)
test("<p><div></b></div></p>"); // "/b" (not opened)
test("<p><div><b></b></div></p>"); // true