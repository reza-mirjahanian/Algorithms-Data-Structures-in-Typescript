// n cities
// int c_lib: integer, the cost to build a library
// int c_road: integer, the cost to repair a road
// int cities[m][2]: each  contains two integers that represent cities that can be connected by a new road

// Conclusion
// With these observations taken into account, there are two ways to assemble a component:
// A library must exist in at least one city, so  roads must be repaired (where  is the number of cities in the component).
// A library must exist in every city in a component, meaning that no roads need to be repaired. We choose this option when the cost of building a library is less than the cost of repairing a road.
// The minimum cost for each component will either be  when we repair roads, or  when we build a library in each city. Choosing the option that is smallest and summing it with all of the other smallest options for each component yields the value of the cheapest solution. If the cost for repairing a road and building a library are the same, the two approaches will be equal (meaning both options are equally valid).

function roadsAndLibraries(n: number, c_lib: number, c_road: number, cities: number[][]): number {

  /* If the cost of creating a library is less than the cost of creating a road then simply create libraries in each of the cities
    else you can use bfs to find all the connected cities and get the cost of creating a library in one city and the cost of
    creating roads to all its connected cities.*/

  if (c_lib < c_road) { // build on each cities
    return c_lib * n;
  }

  let citiesSet = new Set();
  for (let i = 0; i < cities.length; i++) {
    citiesSet.add(cities[i][0]);
    citiesSet.add(cities[i][1]);
  }

  // init AdjList with []
  let AdjList = new Map();
  for (let i of citiesSet.values()) {
    AdjList.set(i, []);
  }

  for (let i = 0; i < cities.length; i++) {
    AdjList.get(cities[i][0]).push(cities[i][1]);
    AdjList.get(cities[i][1]).push(cities[i][0]);
  }

  let citiesKeys = AdjList.keys();
  let visited: Record < number, boolean > = {};
  let cost = 0;
  let connectedCities = 0;
  for (let i of citiesKeys) {
    visited[i] = false;
    connectedCities++;
  }

  // No road
  if (connectedCities != n) {
    cost = c_lib * (n - connectedCities);
  }

  let startingNode: number;
  for (let visitedCity in visited) { // We should traverse each disconnected graph, and add it to total cost
    let cities = [];
    if (!visited[visitedCity]) {
      startingNode = Number(visitedCity);
      cities.push(startingNode);

      let queueItems = [];
      visited[startingNode] = true;
      queueItems.push(startingNode);
      while (queueItems.length > 0) {
        let getQueueElement = parseInt(queueItems.shift());
        let getList = AdjList.get(getQueueElement);
        for (let i in getList) {
          let neigh = getList[i];
          if (!visited[neigh]) {
            visited[neigh] = true;
            cities.push(neigh);
            queueItems.push(neigh);
          }
        }
      }

      cost +=  (c_lib + c_road * (cities.length - 1));
    }
  }

  return cost;
}


// console.log(roadsAndLibraries(3, 2, 1, [
//   [1, 2],
//   [3, 1],
//   [2, 3]
// ]))


console.log(roadsAndLibraries(7, 3, 2, [[1, 7], [1, 3], [1, 2], [2, 3], [5, 6], [6, 8]]))
