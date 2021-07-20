console.log("###-- Problem:  Max difference --###");


// (a) Let S be an unsorted array of n integers. Give an algorithm that finds the pair x,y∈S that maximizes |x−y|. Your algorithm must run in O(n) worst-case time.

function maxAbsDiff1(array: Array<number>): number {
    let a = array[0], b = array[1], c = array[2];
    let maxABC = -1;

    for (let i = 1; i <= array.length; i++) { // O(n)
        const absAB = Math.abs(a - b);
        const absAC = Math.abs(a - c);
        const absCB = Math.abs(b - c);
        maxABC = Math.max(absAB, absAC, absCB);

        if (absAB === maxABC) {
            c = array[i];
        } else if (absAC === maxABC) {
            b = array[i];
        } else if (absCB === maxABC) {
            a = array[i];
        }

    }
    return maxABC;
}

function maxAbsDiff2(arr: Array<number>) {
    let minEle = arr[0];
    let maxEle = arr[0];
    for (let i = 1; i < arr.length; i++) {
        minEle = Math.min(minEle, arr[i]);
        maxEle = Math.max(maxEle, arr[i]);
    }
    return (maxEle - minEle);
}


console.log(maxAbsDiff1([6, 13, 19, 3, 8]));
console.log(maxAbsDiff2([6, 13, 19, 3, 8]));

