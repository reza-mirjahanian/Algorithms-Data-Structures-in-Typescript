//
// static long maximumSum(long[] a, long m) {
//   long max=0;
//   TreeSet<Long> treeSet = new TreeSet<>();
//   long tmpSum = 0;
//
//   for (long l : a) {
//     tmpSum = (tmpSum + l % m) % m;
//     SortedSet<Long> sortSet = treeSet.tailSet(tmpSum + 1);
//     Iterator<Long> longIterator = sortSet.iterator();
//     if (longIterator.hasNext()) {
//       max = Math.max(max, (tmpSum - longIterator.next() + m) % m);
//     }
//
//     max = Math.max(max, tmpSum);
//     treeSet.add(tmpSum);
//   }
//
//   return max;
// }
//
// console.log(maximumSum([3, 3, 9, 9, 5], 7)) //6
