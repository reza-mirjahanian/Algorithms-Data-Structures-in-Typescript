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
function sortedInsert(llist: DoubleLInkedListType, data: number){
    const newNode = new DoublyLinkedListNode(data,null, null);
    if (llist == null) {
        return newNode;
    }
    else if (data <= llist.data) {
        newNode.next = llist;
        llist.prev = newNode;
        return newNode;
    }
    else {
        const rest = sortedInsert(llist.next, data);
        llist.next = rest;
        rest.prev = llist;
        return llist;
    }
}
