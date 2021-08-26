// For the purposes of this challenge, we define a binary search tree to be a binary tree with the following properties:
//
//The  value of every node in a node's left subtree is less than the data value of that node.
// The  value of every node in a node's right subtree is greater than the data value of that node.
// The  value of every node is distinct.

class TreeCheckBST {
  data: number
  left: TreeLCA
  right: TreeLCA
  constructor(left: TreeLCA, right: TreeLCA, data: number) {
    this.left = left;
    this.right = right
    this.data = data
  }
}
let prev: TreeCheckBST;

function checkBST(root: TreeCheckBST): boolean {

  if (root == null) {
    return true;
  }
  if (!checkBST(root.left)) {
    return false;
  }

  if (prev != null && root.data <= prev.data) {
    return false;
  }

  prev = root;

  return checkBST(root.right);

}