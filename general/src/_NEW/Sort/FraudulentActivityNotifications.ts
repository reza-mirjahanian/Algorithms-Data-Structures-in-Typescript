// Note: The median of a list of numbers can be found by first sorting the numbers ascending. If there is an odd number of values, the middle one is picked. If there is an even number of values, the median is then defined to be the average of the two middle values

// This can be solved using two priority queues in .
// Finding Median using Counting Sort
// Counting sort is primarily used on data that is sorted by integer values which fall into a relatively small range (compared to the amount of random access memory available on a computer). W

function activityNotifications(expenditure: number[], d: number): number {
  // Write your code here
  let notifications = 0

  // Set midpoints for median calculation
  let [halfFloor, halfCeil] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];

  let countList = new Array(201).fill(0)
  for (let i = d - 1; i >= 0; i--) {
    countList[expenditure[i]]++
  }
  let m1, m2, k;
  for (let i = d, l = expenditure.length; i < l; i++) {
    // Find median
    for (m1 = 0, k = 0; k <= halfFloor; k += countList[m1], m1++);
    for (m2 = 0, k = 0; k <= halfCeil; k += countList[m2], m2++);
    m1--; // fix extra iteration
    m2--;

    let m = (m1 + m2) / 2;

    if (expenditure[i] >= m * 2) {
      notifications++
    }

    countList[expenditure[i - d]]--
    countList[expenditure[i]]++
  }

  return notifications

}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
