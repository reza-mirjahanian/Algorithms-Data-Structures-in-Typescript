function minSwaps(arr: number[]) {
  let n = arr.length;


  let positions = [];
  for (const [key, value] of arr.entries()) {
    positions.push({
      key,
      value
    })
  }

  //Sort with index
  positions.sort(function(a, b) {
    return a.value - b.value;
  });

  let visited = new Array(n).fill(false);

  let swap = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] || positions[i].key == i)
      continue;

    let cycle_size = 0;
    let j = i;
    while (!visited[j]) {
      visited[j] = true;
      j = positions[j].key;
      cycle_size++;
    }

    if (cycle_size > 0) {
      swap += (cycle_size - 1);
    }
  }

  return swap;
}

console.log(minSwaps([2, 3, 4, 1, 5]))