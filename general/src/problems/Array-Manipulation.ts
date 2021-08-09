function arrayManipulation(n : number, queries: number[][]) {
    let matrix = new Array(n + 1).fill(0);
    queries.forEach(([a, b, k]) => {
        matrix[a - 1] += k;
        matrix[b] -= k;
    })
    let sum = 0;
    let max = 0;
    matrix.forEach(cell => {
        sum += cell;
        max = Math.max(sum, max)
    })
    return max;
}

console.log(arrayManipulation(12,[
    [2,   7,   4],
    [5,   9,   2],
    [6,   12,  8]
]))
