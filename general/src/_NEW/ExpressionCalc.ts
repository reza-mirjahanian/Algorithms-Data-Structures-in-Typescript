const assert = require('assert');


class InfixToPrefix {
  private static _look(array: string[]): string {
    return (array[array.length - 1]);
  }

  private static _priority(char: string) {
    if (char === '+' || char === '-') {
      return 1;
    }
    if (char === '*' || char === '/') {
      return 2;
    }
    if (char === '(' || char === ')') {
      return 3;
    }
    return -1;
  }

  private static isFull(a: string[]) {
    return a.length >= 1;
  }

  static convert(infix: string) {
    infix = infix.replace(/\)/g, '@');
    infix = infix.replace(/\(/g, ')');
    infix = infix.replace(/@/g, '(');
    const splitArray = infix.match(/[\S]+/g) || [];
    const reversedArray = splitArray.reverse();
    let s = [];
    console.log(reversedArray)
    let output = [];
    for (let ch of reversedArray) {
      if (ch !== ')' && ch !== '(' && ch !== '+' && ch !== '-' && ch !== '*' && ch !== '/') {
        output.push(ch)

      } else if (ch == ')') {
        while (InfixToPrefix._look(s) != '(') {

          output.push(s.pop());
        }
        s.pop();
      } else {
        while (InfixToPrefix.isFull(s)) {
          if (InfixToPrefix._look(s) === '(') {
            break;
          }
          if (InfixToPrefix._priority(InfixToPrefix._look(s)) < InfixToPrefix._priority(ch)) {
            break;
          }

          output.push(s.pop())
        }

        s.push(ch);
      }
    } // Endfor

    while (InfixToPrefix.isFull(s)) {
      output.push(s.pop())
    }
    return output.reverse().join(' ')
  }

}

class PreFixCalc {
  private static calc(operator: string, num1: number, num2: number): number {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2
    } else if (operator === '*') {
      return num1 * num2
    } else if (operator === '/') {
      if (num2 > 0) {
        return (num1 / num2)
      }
    }
    return 0;
  }


  private static isValidNumber(string = '') {
    if (string === '0') {
      return false;
    }

    if (string.length > 1 && string[0] === '-') {
      string = string.slice(1)
    }

    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) === 46) { // '.'
        continue;
      }
      if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57) {
        return false;
      }
    }
    return true;
  }

  static run(expression: string): number {

    const chars = expression.trim().split(/\s+/);
    const stack: number[] = [];
    let i = chars.length - 1;
    for (i; i >= 0; i--) {

      const char = chars[i];
      if (PreFixCalc.isValidNumber(char)) { // 1 2 43 404
        stack.push(Number(char))
      } else if (['+', '/', '-', '*'].includes(char) && stack.length >= 2) {
        const num1 = stack.pop();
        const num2 = stack.pop();
        let result = 0;
        if (num1 !== undefined && num2 !== undefined) {
          result = PreFixCalc.calc(char, num1, num2);
        }


        if (result !== null) {
          stack.push(result)
        }
      }
    }

    if (stack.length === 1) {
      return stack[0];
    }

    return 0;
  }


}

const calcRun = (expression: string): number => {

  const preFixEx = InfixToPrefix.convert(expression);
  console.log({
    preFixEx
  })
  const result = PreFixCalc.run(preFixEx);
  console.log({
    result
  })
  return result
};


assert(calcRun('1-1') === 0);
// assert(calcRun('( 2 + 3.33 )    ') === 5.33);
// assert(calcRun('( 1 ) * 4   ') === 4);
// assert(calcRun('( 1 ) * -4   ') === -4);