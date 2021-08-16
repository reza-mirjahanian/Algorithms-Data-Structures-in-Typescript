function fQuery(queries: [number, number][]) {
  const frequencies = [];
  const frequencyTracker = []; // For better speed
  const output = [];

  for (const query of queries) {
    const [operation, data] = query;
    let index;

    if (operation === 1 || operation === 2) {
      index = frequencies[data];
      if (frequencyTracker[index]) {
        --frequencyTracker[index]
      }
    }

    if (operation === 1) { //Insert
      typeof frequencies[data] === 'undefined' ? frequencies[data] = 1 : ++frequencies[data];
    }

    if (operation === 2 && frequencies[data]) { //Remove
      --frequencies[data];
    }

    if (operation === 1 || operation === 2) {
      index = frequencies[data];
      frequencyTracker[index] ? ++frequencyTracker[index] : frequencyTracker[index] = 1;
    }

    if (operation === 3) { //print
      output.push(frequencyTracker[data] > 0 ? 1 : 0);
    }
  }

  return output;
}

console.log(fQuery(
  [
    [1, 5],
    [1, 6],
    [3, 2],
    [1, 10],
    [1, 10],
    [1, 6],
    [2, 5],
    [3, 2]
  ]
));
