
function minimumAbsoluteDifference(arr: number[]): number {
    // Write your code here
    arr.sort((a, b) => a - b)

    let min = Math.abs(arr[0] - arr[1])
    for(let i = 1; i < arr.length - 1; i++) {
        let tempMin = Math.abs(arr[i] - arr[i+1])
        if(tempMin < min) {
            min = tempMin
        }
    }

    return min
}
