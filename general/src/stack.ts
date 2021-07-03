console.log("###-- Stack --###");

//LIFO
class Stack<T> {
    _store: T[] = [];

    push(val: T) {
        this._store.push(val);
    }

    pop(): T | undefined {
        return this._store.pop();
    }
}

const simpleStack = new Stack<number>();
simpleStack.push(1);
simpleStack.push(2);
console.log('SimpleStack');
console.log(simpleStack.pop());
console.log(simpleStack.pop());
console.log(simpleStack.pop());

////////////////////////////////
interface IStack<T> {
    push(item: T): void;

    pop(): T | undefined;

    peek(): T | undefined;

    size(): number;
}

class Stack2<T> implements IStack<T> {

    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Capacity exceeded");
        } else {
            this.storage.push(item);
        }
    }

    size(): number {
        return this.storage.length;
    }

}

const testStack2 = new Stack2<string>();

testStack2.push("Reza");
testStack2.push("Mir");

console.log('Testing Stack2');
console.log(testStack2.peek());
console.log(testStack2.pop());
