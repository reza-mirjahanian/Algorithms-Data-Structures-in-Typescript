console.log("###-- Queue --###");

//FIFO
class Queue<T> {
    private storage: T[] = [];

    push(item: T) {
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.shift();
    }
}

const simpleQueue = new Queue<number>();
simpleQueue.push(1);
simpleQueue.push(2);
console.log('simpleQueue');
console.log(simpleQueue.pop());
console.log(simpleQueue.pop());
console.log(simpleQueue.pop());

////////////////////////////////
interface IQueue<T> {
    dequeue(): T | undefined;

    enqueue(item: T): void;

    size(): number;
}

class Queue2<T> implements IQueue<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {
    }

    size(): number {
        return this.storage.length;
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    enqueue(item: T) {
        if (this.capacity === this.size()) {
            throw new Error("exceeded capacity");
        } else {
            this.storage.push(item);
        }
    }

    isFull(): boolean {
        return this.capacity === this.size();
    }
}

const testQueue2 = new Queue2<string>();
testQueue2.enqueue("Reza");
testQueue2.enqueue("Ali");
testQueue2.enqueue("John");

console.log(testQueue2.dequeue());
console.log(testQueue2.dequeue());
