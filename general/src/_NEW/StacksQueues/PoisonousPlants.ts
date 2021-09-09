function poisonousPlants(p: number[]): number {
  // Write your code here

  const queue = [{
    val: p[0],
    day: 0
  }];
  let minimum = p[0];
  let maximum = 0;
  for (let num of p) {
    let day = 1;
    while (queue.length && num <= queue[0].val) {
      const before = queue.shift();
      if (before) {
        day = Math.max(day, before.day) + 1;
      }
    }

    if (num <= minimum) {
      minimum = num;
      day = 0;
    }

    if (queue.length && queue[0].day === day) {
      queue.shift();
    }

    maximum = Math.max(maximum, day);
    queue.unshift({
      val: num,
      day
    });

  }// for
  return maximum;
}

console.log(poisonousPlants([6, 5, 8, 4, 7, 10, 9]))
