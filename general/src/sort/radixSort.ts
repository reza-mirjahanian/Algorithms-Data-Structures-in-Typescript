console.log("###--  Radix Sort  --###");

//Radix sort is an integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value (place value). Radix sort uses counting sort as a subroutine to sort an array of numbers. Because integers can be used to represent strings (by hashing the strings to integers), radix sort works on data types other than just integers. Because radix sort is not comparison based, it is not bounded by \Omega(n \log n)Ω(nlogn) for running time — in fact, radix sort can perform in linear time.

const radixCountingSort = function(array: Array<number>, exponent: number): Array<number> {
    let bucketIndex;
    const buckets = [];
    const output = [];

    // Initialize bucket
    for (let i = 0; i < 10; i++) {
        buckets[i] = 0;
    }

    // Count frequencies per bucket
    for (let i = 0; i <array.length; i++) {
        bucketIndex = Math.floor(((array[i]) / exponent) % 10);
        buckets[bucketIndex]++;
    }

    // Modify the count array such that each element at each index
    // stores the sum of previous counts.
    for (let i = 1; i < 10; i++) {
        buckets[i] += buckets[i - 1];
    }

    // Output each object from the input sequence followed by
    // decreasing its count by 1
    for (let i = array.length - 1; i >= 0; i--) {
        bucketIndex = Math.floor(((array[i]) / exponent) % 10);
        output[--buckets[bucketIndex]] = array[i];
    }

    return output;
}


const radixSortLSD = function(array: Array<number>): Array<number> {
    if (array.length === 0) {
        return array;
    }

    const maxValue = Math.max(...array);

    // Perform counting sort on each exponent/digit
    let exponent = 1;
    while ((maxValue) / exponent >= 1) {
        array = radixCountingSort(array, exponent);

        exponent *= 10;
    }

    return array;
}

console.log(radixSortLSD([9, 5, 6, 7, 2, 4]));
