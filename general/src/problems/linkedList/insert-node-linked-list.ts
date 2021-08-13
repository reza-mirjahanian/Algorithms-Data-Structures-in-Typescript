// SinglyLinkedListNode {
//      int data;
//      SinglyLinkedListNode next;
//  }
class SinglyLinkedListNode {
  next: SinglyLinkedListNode | null;
  data: number
  constructor(data: number, next: SinglyLinkedListNode | null) {
    this.next = next;
    this.data = data;
  }


}

function insertNodeLinkedList(llist: SinglyLinkedListNode | null, data: number, position: number) {
  if (!llist || position === 0) {
    return new SinglyLinkedListNode(data, null);
  }

  let current = llist;


  let count = 1;
  while (current) {
    if (count === position) {
      const node = new SinglyLinkedListNode(data, null);
      node.next = current.next;
      current.next = node;
      return llist;
    }
    if (current.next !== null) {

      count++;
      current = current.next;
    }
  }

}