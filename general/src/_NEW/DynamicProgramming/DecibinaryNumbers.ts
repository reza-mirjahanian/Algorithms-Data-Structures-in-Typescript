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
