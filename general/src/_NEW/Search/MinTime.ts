// You are planning production for an order. You have a number of machines that each have a fixed number of days to produce an item. Given that all the machines operate simultaneously, determine the minimum number of days to produce the required order.

function minTime(machines: number[], goal: number) {
  machines.sort((a, b) => a - b);

  let max = machines[machines.length - 1];
  let low = 0;
  let top = max * goal;
  let output = -1;
  while (low < top) {
    let mid = Math.floor((low + top) / 2);
    let unit = 0;
    for (let machine of machines) {
      unit += Math.floor(mid / machine);
    }
    if (unit < goal) {
      low = mid + 1;
    } else {
      output = mid;
      top = mid;
    }
  }
  return output;
}

//With Bin search
function findItems(machines: number[], targetDay: number) {
  let day = 0;
  for (let c of machines) {
    day += Math.floor(targetDay / c);
  }

  return day;
}

function binaryS(machines: number[], targetDay: number, maxDay: number) {
  let minDay = 1;

  while (minDay < maxDay) {
    let middle = (minDay + maxDay) >> 1;
    let found = findItems(machines, middle);

    if (found < targetDay) {
      minDay = middle + 1;
    } else {
      maxDay = middle;
    }
  }

  return maxDay;
}

function minTime1(machines: number[], goal: number) {

  let max = Math.max.apply(null, machines)

  return binaryS(machines, goal, max * goal);
}

//

console.log(minTime([2, 3, 2], 10))
