function findShortest(graphNodes: number, graphFrom: number[], graphTo: number[], ids: number[], val: number) {
  let map: number[][] = [];
  const distances = new Map();
  let queue: number[] = [];
  const seen = new Set();

  for (let i = 0; i < graphNodes; i++) {
    map[i] = [];
  }

  for (let i = 0; i < graphFrom.length; i++) {
    map[graphFrom[i] - 1].push(graphTo[i]);
    map[graphTo[i] - 1].push(graphFrom[i]);
  }


  for (let i = 0; i < ids.length; i++) {
    if (ids[i] == val) {
      queue.push(i + 1);
      distances.set(i + 1, 0);
    }
  }

  if (queue.length < 2) {
    return -1;
  }

  while (queue.length > 0) {
    let current = queue.pop() as number;
    seen.add(current);

    for (let a of map[current - 1]) {
      if (distances.has(a) && !seen.has(a)) {
        return distances.get(a) + distances.get(current) + 1;
      } else {
        queue.push(a);
        distances.set(a, distances.get(current) + 1);
      }
    }
  }
  return -1;
}

// console.log(findShortest(5,[1, 2, 2, 3],[2, 3, 4, 5],[1,2,3, 1,3], 1))
console.log(findShortest(4,[1,1,4],[2,3,2],[1,2,1,1], 1))
