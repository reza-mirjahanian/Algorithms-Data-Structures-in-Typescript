// Write algorithm for java grep command for word matching in the following context.Given a file containing n words.Given a word w and a number k.Find k words in the file occuring before occurence of w.Assume that the average word size is m in the fileeg.
// aaa
// bbb
// ccc
// booking
// alpha
// beta
// gamma
//
// for k=3 and w = booking
// the output should be [aaa,bbb,ccc,booking]
// similarly for k =2 and w = beta
// output should be [booking,alpha,beta]
// Assume that the file size can grow very large
// and try to get solution with space complexity lesser than O(n)

class MyGrep {
  private indexTable
  private lineTable
  constructor() {
    this.indexTable = new Map();
    this.lineTable = new Map();
  }

  addLine(line: string, lineNumber: number) {
    const found = this.indexTable.get(line);
    if (!found) {
      this.indexTable.set(line, [lineNumber])
    } else {
      found.push(lineNumber)
      this.indexTable.set(line, found)
    }
    // Add lineNumber-> work
    this.lineTable.set(lineNumber, line)
  }

  searchWord(line: string, before: number = 0) {
    const indexArray = this.indexTable.get(line);
    if (!indexArray) {
      return []
    }
    const output = [];

    for (let hit of indexArray) {
      const list = [];
      for (let j = hit; j >= 0 && j >= hit - before; j--) {
        list.push(this.lineTable.get(j))
      }
      output.push(list);
    }
    return output;
  }
  debug() {
    console.log(this.indexTable)
    console.log(this.lineTable)
  }
}

const testMyGrep = new MyGrep();

['aaa',
  'bbb',
  'ccc',
  'booking',
  'alpha',
  'beta',
  'gamma',
  'booking',
].forEach((word, i) => {
  testMyGrep.addLine(word, i)
})
console.log(testMyGrep.searchWord('booking', 3))
