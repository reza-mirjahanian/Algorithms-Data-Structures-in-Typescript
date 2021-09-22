function minCostDeletion(S: string, C: number[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    let total = 0;
    const stringSize = S.length;
    for (let i = 0; i < stringSize - 1; i++) {
        let totalCost = C[i];
        let tmpMaxCost = C[i];
        while ( i < stringSize && S[i] === S[i + 1] ) {
            totalCost = totalCost + C[i + 1];
            tmpMaxCost = Math.max(tmpMaxCost, C[i + 1]);
            i++;
        }
        total = total + totalCost - tmpMaxCost;
    }

    return total;
}

console.log(minCostDeletion("aaaa", [6,4,5,3]));
console.log(minCostDeletion("aaaa", [3, 4, 5, 6]));
console.log(minCostDeletion("abccbd", [0, 1, 2, 3, 4, 5]));
console.log(minCostDeletion("aabbcc", [1, 2, 1, 2, 1, 2]));
console.log(minCostDeletion("ababa", [10, 5, 10, 5, 10]));
