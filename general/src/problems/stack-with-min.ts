//How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element?
// Push, pop and min should all operate in 0(1) time.
class StackMin {
  private _stack: any[];
  private _minHistory: any[];

  constructor() {
    this._minHistory = [Infinity];
    this._stack = [];
  }

  push(value: number) {
    let last = this._minHistory[this._minHistory.length - 1];
    this._minHistory.push(Math.min(last, value));
    this._stack.push(value);
    return this._stack;
  }

  pop() {
    this._minHistory.pop();
    return this._stack.pop();
  }


  getMin() {
    return this._minHistory[this._minHistory.length - 1];
  }
}


const s = new StackMin();
console.log(s.getMin())
s.push(0);
s.push(-1);
s.push(3);
s.push(2);
console.log(s.getMin())
console.log(s.pop())