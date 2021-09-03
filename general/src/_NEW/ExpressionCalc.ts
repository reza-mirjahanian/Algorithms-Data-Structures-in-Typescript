const assert = require('assert');

type opType = {
  index: number,
  operator: string,
  precedence: number
};

class InfixToPrefix {

  static normalize(str: string) {
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
      } else {
        normalizedStr += char;
      }
    }
    return normalizedStr.replace(/([\d|\)]\s*)-/g, "$1 - "); //1-1 1 - 1


  }

  static operators: Record < string, number > = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };


  static isOperator(value: string) {
    return InfixToPrefix.operators[value];
  }

  static reverseByPrecedence(operatorLocations: opType[]) {
    return operatorLocations.reverse().sort(function(a, b) {
      return a.precedence - b.precedence;
    });
  }

  static convert(expression: string) {
    // split on whitespace
    expression = InfixToPrefix.normalize(expression);
    const expressionArray = expression.match(/[\S]+/g) || [];
    const tokens = expressionArray.map((value) => {
      return {
        value: value,
        outputted: false
      };
    });

    let operatorLocations = [];
    let i;

    for (i = 0; i < tokens.length; i++) {
      if (InfixToPrefix.isOperator(tokens[i].value)) {
        operatorLocations.push({
          index: i,
          operator: tokens[i].value,
          precedence: InfixToPrefix.operators[tokens[i].value]
        });
      }
    }
    console.log({
      expression
    })

    if (operatorLocations.length <= 0) {
      return expression;
    } else {
      operatorLocations = InfixToPrefix.reverseByPrecedence(operatorLocations);
      let output = '';
      let outputIndex = 0;

      for (i = 0; i < operatorLocations.length; i++) {
        let opLocation = operatorLocations[i];

        output += tokens[opLocation.index].value + ' ';
        tokens[opLocation.index].outputted = true;

        if (outputIndex === opLocation.index - 1) {
          output += tokens[opLocation.index - 1].value + ' ';
          tokens[opLocation.index - 1].outputted = true;
          outputIndex++;
        }
      }

      for (i = 0; i < tokens.length; i++) {
        if (!tokens[i].outputted) {
          output += tokens[i].value + ' ';
        }
      }
      return output.trim();
    }


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
    console.log({
      chars
    })
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

// console.log(InfixToPrefix.convert('( 5 )'))
// console.log(InfixToPrefix.convert('(3)'))
// console.log(InfixToPrefix.convert('6 + -( -4)'))

//
assert(calcRun('6 + 0 -( -4)') === 10);


// assert(calcRun('(-2)') === -2);
// assert(calcRun('6 + (0 + -4)') === 2);
// assert(calcRun('6 + ( -4)') === 2);
// assert(calcRun('-2') === -2);
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