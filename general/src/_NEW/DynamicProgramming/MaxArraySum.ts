function maxSubsetSum(arr: number[]) {
    if (arr.length == 0) {
        return 0;
    }
    arr[0] = Math.max(0, arr[0]);
    if (arr.length == 1) {
        return arr[0];
    }
    arr[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i] + arr[i - 2]);
    }
    return arr[arr.length - 1];
}

console.log(maxSubsetSum([3 ,5 ,-7, 8, 10]))
