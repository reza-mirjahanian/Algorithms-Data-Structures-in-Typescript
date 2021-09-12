// package com.company;
//
// import java.util.Arrays;
//
// /******************************************************************************
//
//  Online Java Compiler.
//  Code, Compile, Run and Debug java program online.
//  Write your code in this editor and press "Run" button to execute it.
//  *******************************************************************************/
//
//
// public class Main {
//
//     static final int MAX_D = 19;
//     static final int MAX_S = 300000;
//
//     static long[][] f;
//     static long[] c;
//
//     static int binarySearch(long x) {
//     int found = Arrays.binarySearch(c, x);
//     if (found < 0) {
//     found = -1 - found;
// }
// return found;
// }
//
// static void computeF() {
//     f = new long[MAX_D + 1][MAX_S + 1];
//     for (int d = 0; d <= MAX_D; d++) {
//         for (int s = 0; s <= MAX_S; s++) {
//             if (d == 0) {
//                 if (s == 0) {
//                     f[d][s] = 1;
//                 } else {
//                     f[d][s] = 0;
//                 }
//             } else {
//                 f[d][s] = 0;
//                 for (int i = 0; i <= 9; i++) {
//                     long nextS = s - i * (1L << (d - 1));
//                     if (nextS >= 0) {
//                         f[d][s] += f[d - 1][(int) nextS];
//                     }
//                 }
//             }
//         }
//     }
// }
//
// static void computeC() {
//     c = new long[MAX_S + 1];
//     long total = 0;
//     for (int i = 0; i < c.length; i++) {
//         total += f[MAX_D][i];
//         c[i] = total;
//     }
// }
//
// // Complete the decibinaryNumbers function below.
// static long decibinaryNumbers(long x) {
//     if(f == null) {
//         computeF();
//         computeC();
//     }
//
//
//     int s = binarySearch(x);
//     long g = x - (s == 0 ? 0 : c[s - 1]);
//
//     StringBuilder output = new StringBuilder();
//     for (int d = MAX_D; d >= 1; d--) {
//         int j = -1;
//         long prevNumberCount = -1;
//         long numCount = 0;
//         while (numCount < g) {
//             j++;
//
//             prevNumberCount = numCount;
//             numCount += f[d - 1][s - j * (1 << (d - 1))];
//         }
//
//         output.append(j);
//         s -= j * (1 << (d - 1));
//         g -= prevNumberCount;
//     }
//     return Long.parseLong(output.toString());
// }
//
//
// public static void main(String[] args) {
//     System.out.println("Hello World");
//
//     long[] input = {3, 3, 9, 9, 5};
//     int[] graphTo = {2, 3, 2};
//     int[] ids = {1, 2, 1, 1};
//
//     long ans = Main.decibinaryNumbers(23);
//     System.out.println(ans);
//
// }
// }


// const MAX_DECIMAL = 300000;
// const MAX_DIGIT = Math.ceil(Math.log2(MAX_DECIMAL));
// const D = new Array(MAX_DIGIT)
//     .fill(0)
//     .map((_) => new Array(MAX_DECIMAL).fill(-1));
// const O = new Array(MAX_DECIMAL);
//
// const digits_by_decimal = (digits, decimal) => {
//     if (digits < 0) return decimal ? 0 : 1;
//     if (D[digits][decimal] < 0) {
//         D[digits][decimal] = 0;
//         for (let d = 0; d <= 9; d++) {
//             const term = (1 << digits) * d;
//             if (term > decimal) break;
//             D[digits][decimal] += digits_by_decimal(digits - 1, decimal - term);
//         }
//     }
//     return D[digits][decimal];
// };
//
// O[0] = BigInt(1);
// for (let i = 1; i < MAX_DECIMAL; i++)
//     O[i] = O[i - 1] + BigInt(digits_by_decimal(MAX_DIGIT - 1, i));
//
// const to_decimal = (x) => {
//     let l = 0,
//         h = MAX_DECIMAL;
//     while (l <= h) {
//         const m = ((l + h) / 2) | 0;
//         if (O[m] >= x) h = m - 1;
//         else l = m + 1;
//     }
//     return l;
// };

// function decibinaryNumbers(x) {
//     if (x <= 1) return 0;
//     const decimal = to_decimal(x);
//     let index = BigInt(x) - O[decimal - 1];
//     let remainder = decimal;
//     let digits = 0;
//     while (digits_by_decimal(digits, decimal) < index) digits++;
//     let result = BigInt(0);
//     //console.log(x, { decimal, index, digits });
//     while (digits >= 0) {
//         let acc = BigInt(0);
//         for (let digit = 0; digit <= 9; digit++) {
//             const term = (1 << digits) * digit;
//             if (remainder < term) break;
//             const delta = BigInt(digits_by_decimal(digits - 1, remainder - term));
//             //console.log(digits, digit, { term, remainder, delta, acc, index });
//             if (delta + acc >= index) {
//                 result = result * BigInt(10) + BigInt(digit);
//                 index -= acc;
//                 remainder -= term;
//                 //console.log({ result, index, remainder });
//                 break;
//             }
//             acc += delta;
//         }
//         digits--;
//     }
//     return result.toString();
// }
