namespace ReverseDouble {
  type DoubleLInkedListType = DoublyLinkedListNode | null;

  class DoublyLinkedListNode {
    next: DoubleLInkedListType;
    prev: DoubleLInkedListType;
    data: number

    constructor(data: number, next: DoubleLInkedListType, prev: DoubleLInkedListType) {
      this.next = next;
      this.prev = next;
      this.data = data;
    }

  }

  function reverse(llist: DoubleLInkedListType) {
    if (llist == null) {
      return null;
    }
    if (llist.next == null) {

      return llist;
    }

    let current = llist;
    let next = current.next;
    while (next != null) {
      current.next = current.prev;
      current.prev = next;
      current = next;
      next = next.next;

    }

    current.next = current.prev;
    current.prev = null;
    return current;
  }
}