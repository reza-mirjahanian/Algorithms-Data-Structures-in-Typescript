namespace Linklist{
    type Node = SinglyLinkedListNode | null;

    class SinglyLinkedListNode {
        next: Node;
        data: number
        constructor(data: number, next: Node) {
            this.next = next;
            this.data = data;
        }

    }
    function processData(input: Node) {
        //Enter your code here

        let fast = input; // moves 2 Nodes at a time
        let slow = input; // moves 1 Node  at a time

        while (fast != null && slow != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true; // since "slow" and "fast" collided
            }
        }
        return false;
    }


}
