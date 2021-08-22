class InterSection {
  private readonly MIN_COUNT;
  private readonly hashTable

  constructor(minCount = 2) {
    this.hashTable = new Map();
    this.MIN_COUNT = minCount;
  }

  add(arr: number[]) {
    const uniqueArray = new Set(arr);
    for (let n of uniqueArray) {
      const cashed = this.hashTable.get(n) || 0;
      if (cashed < this.MIN_COUNT) {
        this.hashTable.set(n, cashed + 1)
      }
    }
  }

  getList() {
    const output = [];
    for (const [key, value] of this.hashTable) {
      if (value >= this.MIN_COUNT) {
        output.push(key)
      }
    }
    return output;
  }

}

const testInterSection = new InterSection();
testInterSection.add([2, 5, 3, 2, 8, 1]);
testInterSection.add([7, 9, 5, 2, 4, 10, 10]);
testInterSection.add([5, 7, 5, 5, 3, 7]);
console.log(testInterSection.getList())