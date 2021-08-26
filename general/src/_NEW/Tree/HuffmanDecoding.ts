class HuffmanNode {
  data: string
  frequency: number
  left: HuffmanNode
  right: HuffmanNode
  constructor(left: HuffmanNode, right: HuffmanNode, data: string, frequency: number) {
    this.left = left;
    this.right = right;
    this.data = data;
    this.frequency = frequency;
  }
}


function decode(S: string, root: HuffmanNode) {
  let currentRoot = root;
  if (root == null) return;
  let a = S.split('');
  for (let i = 0; i < a.length; i++) {
    if (a[i] == '0') {
      currentRoot = currentRoot.left;
    } else {
      currentRoot = currentRoot.right;
    }

    if (currentRoot.left == null && currentRoot.right == null) {
      console.log(currentRoot.data);
      currentRoot = root;
    }
  }
}
