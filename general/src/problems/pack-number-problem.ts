function freq(arr: number[]) {
    const output = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 1;
        while (i < arr.length && arr[i] === arr[i + 1]) {
            count++
            i++;
        }
        const number = arr[i];
        if (count > 1) {
            output.push(`${number}:${count}`)
        } else {
            output.push(number)
        }

    }
    return output;
}
//[ '5:3', '7:2', 3, 4, 7 ]
console.log(freq([5, 5, 5, 7, 7, 3, 4, 7]))
