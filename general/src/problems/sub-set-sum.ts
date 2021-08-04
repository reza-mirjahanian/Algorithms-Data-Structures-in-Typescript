// Storing the value -1 to the matrix
let cacheMatrix = Array(2000).fill(-1).map(() => Array(2000).fill(-1));

function subsetSum(a : number[], n : number, sum : number) : number {

    // If the sum is zero it means
    // we got our expected sum
    if (sum == 0)
        return 1;

    if (n <= 0)
        return 0;

    // If the value is not -1 it means it
    // already call the function
    // with the same value.
    // it will save our from the repetitions.
    if (cacheMatrix[n - 1][sum] != -1)
        return cacheMatrix[n - 1][sum];

    // if the value of a[n-1] is
    // greater than the sum.
    // we call for the next value
    if (a[n - 1] > sum)
        return cacheMatrix[n - 1][sum] = subsetSum(a, n - 1, sum);
    else {

        // Here we do two calls because we
        // don't know which value is
        // full-fill our criteria
        // that's why we doing two calls
        return cacheMatrix[n - 1][sum] = subsetSum(a, n - 1, sum) ||
            subsetSum(a, n - 1, sum - a[n - 1]);
    }
}


const testInp = [1, 5, 3, 7, 4];
if (subsetSum(testInp, testInp.length, 5) ) {
    console.log("YES" + "<br>");
}
else {
    console.log("NO" + "<br>");
}



