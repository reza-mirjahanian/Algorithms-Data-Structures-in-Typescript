function superDigit(n: string, k: number) : number{
    // Write your code here
    if (n.length === 1 && k === 0) {
        return parseInt(n);
    }

    let sum = 0;
    let chars = [...n];
    for (let c of chars) {
        sum += parseInt(c);
    }

    if (k != 0) sum *= k;

    return superDigit(String(sum), 0);
}

console.log(superDigit('9875',4))
