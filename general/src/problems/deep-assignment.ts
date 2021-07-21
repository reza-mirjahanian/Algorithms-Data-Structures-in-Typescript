console.log("###-- Deep Assignment --###");


//var obj = {};
// deepAssignment(obj, str, value)
// obj.asdf[0][1][1].sss.ddd === 2

function deepAssignment(obj: Record < string, any > , keyPath: string, value: number) {
  const keysArray: {
      val: string | number,
      type: 'object' | 'array'
    } [] = keyPath.split('.')
    .map(str => str.split('['))
    .reduce((prev, next) => prev = prev.concat(next), [])
    .map(val => {
      if (val.includes(']')) {
        return {
          val: +(val.replace(']', '')),
          type: 'array'
        };
      }
      return {
        val: val,
        type: 'object'
      };
    });

  return keysArray.reduce((prev, curr, i, array) => {
    const path: number | string = curr.val;
    if (array[i + 1] && array[i + 1].type === 'object') {
      if (!prev[path]) {
        prev[path] = {};
      }
      return prev[path];
    } else if (array[i + 1] && array[i + 1].type === 'array') {
      prev[path] = prev[path] || []
      return prev[path];
    } else {
      prev[path] = value;
    }
    return prev;
  }, obj);
}

const testObject: Record < string, any > = {};
deepAssignment(testObject, 'asdf[0][1][1].sss.ddd', 44);

console.log(testObject.asdf[0][1][1].sss.ddd)
