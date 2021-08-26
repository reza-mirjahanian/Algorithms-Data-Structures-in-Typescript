class TreeLCA {
  data: number
  left: TreeLCA
  right: TreeLCA
  constructor(left: TreeLCA, right: TreeLCA, data: number) {
    this.left = left;
    this.right = right
    this.data = data
  }
}

function lca(root: TreeLCA, v1: number, v2: number): TreeLCA {
  if (!root || root.data === v1 || root.data === v2) {
    return root;
  }

  const left = lca(root.left, v1, v2);
  const right = lca(root.right, v1, v2);

  if (left && right) {
    return root;
  }

  return left ? left : right;
}

function lca2(root: TreeLCA, v1: number, v2: number) : TreeLCA{
  if (root.data < v1 && root.data < v2) {
    return lca2(root.right, v1, v2);
  }
  //Bigger than both
  if (root.data > v1 && root.data > v2) {
    return lca2(root.left, v1, v2);
  }

  //Else solution already found
  return root;
}
