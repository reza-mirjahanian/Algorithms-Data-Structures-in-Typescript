function processData(input: string) {
  //Enter your code here
  const lines = input.split("\n");
  const inQueue: string[] = [];
  const outQueue: string[] = [];
  let length;

  function transfer() {
    if (outQueue.length === 0) {
      length = inQueue.length;
      while (length-- > 0) {
        outQueue.push(inQueue.pop() as string);
      }
    }
  }

    for (let i = 1; i < lines.length; i++) {
        let numbers: string[] = lines[i].split(' ');
        switch (numbers[0]) {
            case '1':
                inQueue.push(numbers[1])
                break
            case '2':
                transfer();
                outQueue.pop();
                break
            case '3':
                transfer();
                console.log(outQueue[outQueue.length - 1])
                break
            default:
                break
        }

    }
}




