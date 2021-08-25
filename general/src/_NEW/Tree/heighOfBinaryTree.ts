class Tree {
  left: Tree
  right: Tree
  constructor(left: Tree, right: Tree) {
    this.left = left;
    this.right = right
  }
}

function height(root: Tree): number {
  // Write your code here.
  if (root == null) {
    return -1;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}