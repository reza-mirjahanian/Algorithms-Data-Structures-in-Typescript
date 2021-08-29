
function luckBalance(k: number, contests: number[][]): number {
    // Write your code here
    const sortedContests = [...contests].sort((a, b) => b[0] - a[0]);

    let luck = 0, lost = k;
    for (const [value, important] of sortedContests) {
        // increment if lost, decrement if won
        if (important) {
            luck += lost > 0 ? value : -value;
            lost -= 1;
            continue;
        }
        // non-important are always lost
        luck += value;
    }

    return luck;
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))
