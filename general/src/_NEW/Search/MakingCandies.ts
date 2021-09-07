// Karl wants to minimize the number of passes to obtain the required number of candies at the end of a day. Determine that number of passes.

// static long minimumPasses(long m, long w, long p, long n) {
//   long pay = Long.MAX_VALUE;
//   long putMoney = 0;
//   long myCandies = 0;
//
//   while (myCandies < n) {
//     long passes = (long) (((p - myCandies) / (double) m) / w);
//     if (passes <= 0) {
//       long mXw = myCandies / p + m + w;
//       long divideBy2 = mXw >>> 1;
//       if (m > w) {
//         m = Math.max(m, divideBy2);
//         w = mXw - m;
//       } else {
//         w = Math.max(w, divideBy2);
//         m = mXw - w;
//       }
//       myCandies %= p;
//       passes++;
//     }
//     long mXw;
//     long pXmXw;
//     try {
//       mXw = Math.multiplyExact(m, w);
//       pXmXw = Math.multiplyExact(passes, mXw);
//     } catch (ArithmeticException error) {
//       putMoney += 1;
//       pay = Math.min(pay, putMoney + 1);
//       break;
//     }
//
//     myCandies += pXmXw;
//     putMoney += passes;
//     long increment = (long) Math.ceil((n - myCandies) / (double) mXw);
//     pay = Math.min(pay, putMoney + increment);
//   }
//
//   return Math.min(pay, putMoney);
// }
// console.log(minimumPasses(3, 1, 2, 12))
// console.log(minimumPasses(1, 1, 6, 45))
