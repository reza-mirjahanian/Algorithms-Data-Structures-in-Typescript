console.log("###-- DFS BFS --###");

//DFS
//In a depth first search, you start at the root, and follow one of the branches of the tree as far as possible until either the node you are looking for is found or you hit a leaf node ( a node with no children). If you hit a leaf node, then you continue the search at the nearest ancestor with unexplored children.

//BFS
//In a breadth first search, you start at the root node, and then scan each node in the first level starting from the leftmost node, moving towards the right. Then you continue scanning the second level (starting from the left) and the third level, and so on until you’ve scanned all the nodes, or until you find the actual node that you were searching for. In a BFS, when traversing one level, we need some way of knowing which nodes to traverse once we get to the next level. The way this is done is by storing the pointers to a level’s child nodes while searching that level. The pointers are stored in FIFO (First-In-First-Out) queue. This, in turn, means that BFS uses a large amount of memory because we have to store the pointers.

