class sNode {
  depth: number
  index: number
  left: sNode | null
  right: sNode | null
  constructor(index: number, depth: number, left: sNode | null, right: sNode | null) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.depth = depth;
  }
}

function swap(cur: sNode | null, depth: number, k: number) {

  if (cur == null) {
    return;
  }

  swap(cur.left, depth + 1, k);
  //System.out.print("cur.index: " + cur.index);
  swap(cur.right, depth + 1, k);

  if (depth >= k && depth % k == 0) {
    let tmp = cur.left;
    cur.left = cur.right;
    cur.right = tmp;
  }

}

function printInOrder(cur: sNode | null, result: number[]) {

  if (cur == null) {
    return;
  }

  printInOrder(cur.left, result);
  //System.out.print(cur.index + " ");
  result.push(cur.index);
  printInOrder(cur.right, result);
}

function swapNodes(indexes: number[][], queries: number[]): number[][] {
  // Write your code here

  let numOfNodes = indexes.length;
  let numOfQueries = queries.length;
  let result: number[][] = Array.from(Array(numOfQueries), () => new Array(numOfNodes).fill(false));


  let root = new sNode(1, 1, null, null);
  let cur: sNode | undefined = root;

  let nodes: sNode[] = [];
  nodes.push(cur);

  let N = 0; // = numOfNodes;
  while (N < numOfNodes) {
    cur = nodes.shift();
    if (cur) {
      let leftData = indexes[N][0];
      let rightData = indexes[N][1];
      //System.out.println("left,right: " + leftData + " " + rightData + " cur: " + cur );
      cur.left = (leftData == -1) ? null : new sNode(leftData, cur.depth + 1, null, null);
      cur.right = (rightData == -1) ? null : new sNode(rightData, cur.depth + 1, null, null);

      if (cur.left != null && cur.left.index != -1)
        nodes.push(cur.left);
      if (cur.right != null && cur.right.index != -1)
        nodes.push(cur.right);

      N++;
    }


  }

  for (let i = 0; i < numOfQueries; i++) {
    swap(root, 1, queries[i]);
    let res: number[] = [];
    printInOrder(root, res);
    // result[i] = res.stream().mapToInt(r - > r).toArray();
    result[i] = res
  }
  return result;

}

console.log(swapNodes([
  [2, 3],
  [-1, -1],
  [-1, -1]
], [1, 1]));

console.log(swapNodes(
  [
    [2, 3],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, 8],
    [-1, 9],
    [-1, -1],
    [10, 11],
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ], [2, 4]
));