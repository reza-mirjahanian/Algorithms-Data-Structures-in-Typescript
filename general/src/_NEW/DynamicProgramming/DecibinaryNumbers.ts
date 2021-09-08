//
// let numToDigitToArray = new Map();
//
// let digitToArray = new Map();
// digitToArray.set(1, [0])
// numToDigitToArray.set(0, digitToArray);
//
// digitToArray = new Map();
// digitToArray.set(1, [1])
// numToDigitToArray.set(1, digitToArray);
//
// let countArray = [1, 1];
// let sumCountArray = [1, 2];
// let maxNumberOfDigit = [9];
// function addToHashTable(mapOfMap, number, digit, array) {
//   let digitToArr;
//
//   if (mapOfMap.has(number))
//     digitToArr = mapOfMap.get(number);
//   else {
//     digitToArr = new Map();
//     mapOfMap.set(number, digitToArr);
//   }
//
//   digitToArr.set(digit, array);
//   if (digitToArr.count === undefined)
//     digitToArr.count = array.length;
//   else
//     digitToArr.count += array.length;
// }
//
// function minDigit(num) {
//   while (maxNumberOfDigit[maxNumberOfDigit.length - 1] < num) {
//     let nextDigit = maxNumberOfDigit.length;
//     let max = maxNumberOfDigit[maxNumberOfDigit.length - 1] + 9 * Math.pow(2, nextDigit);
//     maxNumberOfDigit.push(max);
//   }
//   return maxNumberOfDigit.length;
// }
//
// function countingArrays(number) {
//   let minDig = minDigit(number), maxDigit = Math.ceil(Math.log2(number));
//   for (let digit = minDig; digit <= maxDigit; digit++) {
//     let formats = formatsOfNumber(number, digit);
//     addToHashTable(numToDigitToArray, number, digit, formats);
//   }
//
//   if (number === Math.pow(2, maxDigit))
//     addToHashTable(numToDigitToArray, number, maxDigit + 1, [parseInt(Number(number).toString(2))]);
//
//   let index = number, count = numToDigitToArray.get(number).count;
//   countArray[index] = count;
//   sumCountArray[index] = count + sumCountArray[index - 1];
// }
//
// function lastFormatOfNumber(digit2Arr) {
//   let keys = Array.from(digit2Arr.keys()), lastKey = keys[keys.length - 1];
//   let array = digit2Arr.get(lastKey);
//   return array[array.length - 1];
// }
//
// function formatsOfNumber(number, digit) {
//   if (digit < 1)
//     throw Error(`Unexpected case: number: ${number}, digit: ${digit}.`);
//   if (number < 10 && digit === 1)
//     return [number];
//   else if (number === 0 || number === 1)
//     return [number];
//   else if (digit < minDigit(number))
//     return [];
//
//   let lessDigits = digit - 1, n = number - Math.pow(2, lessDigits), formats = [];
//   for (let highBit = 1; highBit < 10; highBit++) {
//     if (n < 0)
//       break;
//
//     formats = formats.concat(highBit.toString() + formatsOfNumber(n, lessDigits).map(lower => String(lower).padStart(lessDigits, '0')));
//     n -= Math.pow(2, lessDigits);
//   }
//
//   return formats;
// }
//
//
// function decibinaryNumbers(x) {
//
//   while (x > sumCountArray[sumCountArray.length - 1]) {
//     countingArrays(sumCountArray.length);
//   }
//
//   let found = sumCountArray.findIndex(value => value === x);
//   if (found !== -1){
//     return lastFormatOfNumber(numToDigitToArray.get(found));
//   }
//   else{
//     found = sumCountArray.findIndex((value, index) => sumCountArray[index - 1] < x && value > x);
//   }
//
//
//   let diff = x - sumCountArray[found - 1];
//   let digitToArray = numToDigitToArray.get(found);
//   for (let digit of digitToArray.keys()) {
//     let formats = digitToArray.get(digit);
//     if (diff - formats.length <= 0)
//       return formats[diff - 1];
//     else
//       diff -= formats.length
//   }
//
// }
//
// console.log(decibinaryNumbers(8))
