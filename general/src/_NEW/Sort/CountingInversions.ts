function mergeSortWithCount(arr: number[]): [number[],number] {

    if(arr.length == 1){
        return [arr, 0];
    }

    let half = Math.floor(arr.length / 2);

    let [lHalf, lSwap]  = mergeSortWithCount(arr.slice(0,half));
    let [rHalf, rSwap] = mergeSortWithCount(arr.slice(half));

    let lPointer = 0;
    let rPointer = 0;
    let swap = lSwap + rSwap;

    let sorted = [];

    while(lPointer < lHalf.length || rPointer < rHalf.length){
        if(lPointer != lHalf.length && rPointer != rHalf.length){
            if(lHalf[lPointer] <= rHalf[rPointer]){
                sorted.push(lHalf[lPointer++]);
            }else if(lHalf[lPointer] > rHalf[rPointer]){
                swap += lHalf.length - lPointer;
                sorted.push(rHalf[rPointer++]);
            }
        }else if (lPointer == lHalf.length){
            sorted.push(rHalf[rPointer++]);
        }else{
            sorted.push(lHalf[lPointer++]);
        }
    }

    return [sorted, swap];

}

function countInversions(arr: number[]): number {
    // Write your code here
    let [sorted, totalInversions] = mergeSortWithCount(arr);

    return totalInversions;
}

console.log(countInversions([2, 1, 3, 1, 2]))
console.log(countInversions([1, 1, 1, 2, 2]))
