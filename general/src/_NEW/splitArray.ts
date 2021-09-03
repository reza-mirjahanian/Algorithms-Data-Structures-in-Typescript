export const splitInteger = (num: number, parts: number) => {
  let number;
  let remainder = num % parts;
  let output = []
  if (remainder === 0) {
    number = num / parts;
    output = new Array(parts).fill(number);
  } else {
    number = (num - remainder) / parts;
    output = new Array(parts).fill(number);

    //balance
    for (let i = 0; i < remainder; i++) {
      output[i]++;
    }
    output.reverse()
  }

  return output;
};

console.log(splitInteger(11, 3))
