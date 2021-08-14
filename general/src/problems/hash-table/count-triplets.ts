function countTriplets(arr:Array<number>, r:number) {

    const numCounts : Record<string, number> = {}
    const pairCounts : Record<string, number>  = {}
    let total = 0

    for (let i = arr.length - 1; i >= 0; i--) {
        const [val, nextVal] = [arr[i], arr[i] * r];

        if (nextVal in pairCounts) {
            total += pairCounts[nextVal]
        }

        if (nextVal in numCounts) {
            pairCounts[val] = (pairCounts[val] || 0) + numCounts[nextVal];
        }

        numCounts[val] = (numCounts[val] || 0) + 1;
    }

    return total
}

console.log(countTriplets([1 ,3 ,9 ,9 ,27, 81], 3))
