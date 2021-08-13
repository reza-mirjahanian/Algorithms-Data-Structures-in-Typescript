namespace Linklist {
  type Node = SinglyLinkedListNode | null;

  class SinglyLinkedListNode {
    next: Node;
    data: number
    constructor(data: number, next: Node) {
      this.next = next;
      this.data = data;
    }

  }

    // [List #1] a--->b--->c
    //                  \
    //                   x--->y--->z--->NULL
    // /
    // [List #2] p--->q
  function findMergeNode(headA: Node, headB: Node) {
    let tmp;
    while (headA != null) {
      tmp = headB;
      while (tmp !== null) {
        if (headA === tmp) {
          return tmp.data;
        }
        tmp = tmp.next;
      }

      headA = headA.next;
    }
    return null;
  }
}
