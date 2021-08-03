function isString(myVar: unknown) {
  return (typeof myVar === 'string' || myVar instanceof String)
}

function isObject(myVar: object) {
  return typeof myVar === 'object' && myVar !== null
}

function calc(operator: string, num1: number, num2: number): number | null {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2
  } else if (operator === '*') {
    return num1 * num2
  } else if (operator === '/') {
    if (num2 > 0) {
      return Math.floor(num1 / num2)
    }
  }
  return null;
}
const isDigit = (n: string) => {
  return !isNaN(parseFloat(n))
}

function isValidNumber(string = '') {
  if (string === '0') {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57) {
      return false;
    }
  }
  return true;
}

function solution(expression: string, variables: Record < string, number > ) {
  if (!isString(expression) || !isObject(variables)) {
    return null;
  }

  const chars = expression.trim().split(/\s+/);
  const stack: number[] = [];
  let i = chars.length - 1;
  for (i; i >= 0; i--) {

    const char = chars[i];
    if (isValidNumber(char)) { // 1 2 43 404
      stack.push(parseInt(char))
    } else if (char in variables) {
      stack.push(variables[char])
    } else if (['+', '/', '-', '*'].includes(char) && stack.length >= 2) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (num2 === undefined || num1 === undefined) {
        return null;
      }
      const result = calc(char, num1, num2);

      if (result !== null) {
        stack.push(result)
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  if (stack.length === 1) {
    return stack[0];
  } else {
    return null
  }
}


let a = solution('* + / a b 2 1', {
  a: 1,
  b: 50
});
console.log({
  a
})