const assert = require('assert');


class InfixToPrefix {

  splitByWhiteSpace(str: string) {
    return str.match(/[\S]+/g) || [];
  }

  normalize(str: string) {
    let normalizedStr = '';

    for (let i = 0; i < str.length; i++) {

      let char = str[i];
      if (char === '(') {
        normalizedStr += ' ( '
      } else if (char === ')') {
        normalizedStr += ' ) '
      } else if (char === '*') {
        normalizedStr += ' * '
      } else if (char === '/') {
        normalizedStr += ' / '
      } else if (char === '+') {
        normalizedStr += ' + '
      } else if (char === '-' && str[i + 1] === '(') {
        normalizedStr += ' # ( ';
        i++;
      } else {
        normalizedStr += char;
      }
    }
    normalizedStr = normalizedStr.replace(/([\d|)]\s*)-/g, "$1 - "); //1-1 1 - 1
    return normalizedStr;


  }

  mainStack: string[] = [];
  stackPointer = -1;

  push(c: string) {
    this.stackPointer++;
    this.mainStack[this.stackPointer] = c;
  }

  pop() {
    if (this.stackPointer === -1)
      return '';
    else {
      let popped_ele = this.mainStack[this.stackPointer];
      this.stackPointer--;
      return popped_ele;
    }
  }

  isOperator(c: string) {
    return (c === '+' || c === '-' || c === '#' || c === '*' || c === '/' || c === '(' || c === ')');
  }

  getOrders(c: string) {
    if (c === '!' || c === '(' || c === ')') {
      return 1;
    } else if (c === '+' || c === '-') {
      return 2;
    } else if (c === '/' || c === '*') {
      return 3;
    } else if (c === '#') {
      return 4;
    } else
      return 0;
  }
  convert(expression: string): string[] {
    let prefix: string[] = [];
    let temp = 0;
    this.push('!');
    expression = this.normalize(expression);
    let expressionArray = this.splitByWhiteSpace(expression);

    for (let i = expressionArray.length - 1; i >= 0; i--) {
      let el = expressionArray[i];
      if (this.isOperator(el)) {
        if (el === '(') {
          while (this.mainStack[this.stackPointer] !== ")") {
            prefix[temp++] = this.pop();
          }
          this.pop();
        } else if (el === ')') {
          this.push(el);
        } else if (this.getOrders(el) > this.getOrders(this.mainStack[this.stackPointer])) {
          this.push(el);
        } else {
          while (this.getOrders(el) <= this.getOrders(this.mainStack[this.stackPointer]) && this.stackPointer > -1) {
            prefix[temp++] = this.pop();
          }
          this.push(el);
        }
      } else {
        prefix[temp++] = el;
      }
    }
    while (this.mainStack[this.stackPointer] !== '!') {
      prefix[temp++] = this.pop();
    }

    return prefix.reverse();
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

  static run(chars: string[]): number {


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
      } else if (char === '#' && stack.length > 0) {
        const num1 = stack.pop();
        if (num1 !== undefined) {
          stack.push(-1 * num1)
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
  const toPrefix = new InfixToPrefix();

  const preFixEx = toPrefix.convert(expression);

  const result = PreFixCalc.run(preFixEx);

  return result
};

// const testPre = new InfixToPrefix();
// console.log(testPre.convert('( 5 )'))
// console.log(testPre.convert('6 + (0 + -4)'))
// console.log(InfixToPrefix.convert('(3)'))
// console.log(InfixToPrefix.convert('6 + -( -4)'))

//
assert(calcRun('6 +  -( -4)') === 10);
assert(calcRun('-(-3) +  -( -4)') === 7);
assert(calcRun('-(1)') === -1);
assert(calcRun('(-2)') === -2);
assert(calcRun('6 + (0 + -4)') === 2);
assert(calcRun('6 + ( -4)') === 2);
assert(calcRun('-2') === -2);
// assert(calcRun('3 - -2') === 5);
// assert(calcRun('4 -   -3') === 7);
// assert(calcRun('4 -3 ') === 1);
// assert(calcRun('(4) -3  ') === 1);
// assert(calcRun('(4)-3  ') === 1);
// assert(calcRun('4- -3') === 7);
// assert(calcRun('7-3 ') === 4);
// assert(calcRun('6- 1 ') === 5);
// assert(calcRun('5 - 1') === 4);
// assert(calcRun('1- -1') === 2);
// assert(calcRun('1 - -1') === 2);
// assert(calcRun('6 +  (4) ') === 10);
// assert(calcRun('6*(4)') === 24);
// assert(calcRun('8/(4)') === 2);
// assert(calcRun('( 2 + 3.33 )    ') === 5.33);
// assert(calcRun('( 1 ) * 4   ') === 4);
// assert(calcRun('( 1 ) * -4   ') === -4);
// assert(calcRun('6-1') === 5);

console.log('END')
