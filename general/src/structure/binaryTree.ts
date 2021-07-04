console.log("###--BinaryTree --###");
// binary search tree (BST)

//The value of the key of the left sub-tree is less than the value of its parent (root) node's key.
// The value of the key of the right sub-tree is greater than or equal to the value of its parent (root) node's key.

/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
*/

interface INode<U> {
    value: U
    left: INode<U> | null
    right: INode<U> | null
}

export default class BinaryTree<U> {

    private root: INode<U> | undefined

    createNewNode = (value: U): INode<U> => {
        return {
            value,
            left: null,
            right: null,
        }
    }

    insert = (value: U) => {
        const newNode = this.createNewNode(value)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertIntoCurrentNode(newNode)
        }
        return this
    }

    private insertIntoCurrentNode = (newNode: INode<U>) => {
        const {value} = newNode
        const traverse = (node: INode<U>) => {
            if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else traverse(node.right)
            } else if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                } else traverse(node.left)
            }
        }
        traverse(this.root as INode<U>)
    }

    contains = (value: U) => {
        // eslint-disable-next-line consistent-return
        const traverse = (node: INode<U>): undefined | boolean => {
            if (!node) return false
            if (value === node.value) {
                return true
            }
            if (value > node.value) {
                return traverse(node.right as INode<U>)
            }
            if (value < node.value) {
                return traverse(node.left as INode<U>)
            }
        }
        const rootNode: INode<U> | undefined = this.root
        return traverse(rootNode as INode<U>)
    }

// find the left most node to find the min value of a binary tree
    findMin = () => {
        const traverse = (node: INode<U>): INode<U> | U => {
            return !node.left ? node.value : traverse(node.left)
        }
        const rootNode: INode<U> = this.root as INode<U>
        return traverse(rootNode)
    }

// find the right most node to find the max value of a binary tree
    findMax = () => {
        const traverse = (node: INode<U>): INode<U> | U => {
            return !node.right ? node.value : traverse(node.right)
        }
        const rootNode: INode<U> = this.root as INode<U>
        return traverse(rootNode)
    }
    preOrder = () => {
        let result: U[]
        result = []
        const traverse = (node: INode<U>) => {
            result.push(node.value)
            node.left && traverse(node.left)
            node.right && traverse(node.right)
        }
        const rootNode: INode<U> | undefined = this.root as INode<U>
        traverse(rootNode)
        return result
    }
    inOrder = () => {
        let result: U[]
        // eslint-disable-next-line prefer-const
        result = []
        const traverse = (node: INode<U>) => {
            node.left && traverse(node.left)
            result.push(node.value)
            node.right && traverse(node.right)
        }
        const rootNode: INode<U> | undefined = this.root as INode<U>
        traverse(rootNode)
        return result
    }
    postOrder = () => {
        let result: U[]
        // eslint-disable-next-line prefer-const
        result = []
        const traverse = (node: INode<U>) => {
            node.left && traverse(node.left)
            node.right && traverse(node.right)
            result.push(node.value)
        }
        const rootNode: INode<U> | undefined = this.root as INode<U>
        traverse(rootNode)
        return result
    }
}

const binaryTree = new BinaryTree()
binaryTree.insert(10).insert(20).insert(30).insert(5).insert(8).insert(3).insert(9);

//       10
//      /   \
//     5    20
//    / \    \
//   3  8    30
//       \
//       9

console.log(binaryTree.contains(30)) // true
console.log(binaryTree.findMin()) // 3
console.log(binaryTree.findMax()) // 30


// [ 10, 5, 3, 8, 9, 20, 30 ]
console.log('preorder', binaryTree.preOrder())
// [ 3, 5, 8, 9, 10, 20, 30 ]
console.log('inorder', binaryTree.inOrder())
// [ 3, 9, 8, 5, 30, 20, 10]
console.log('postorder', binaryTree.postOrder())
