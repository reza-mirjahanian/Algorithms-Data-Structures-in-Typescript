console.log("###--  Counting Sort  --###");

//Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing).
const countingSort = function(array: Array<number>): Array<number> {
    const max = Math.max(...array);
    const occurrences = [];
    const sorted = [];
    let i, j;

    for (i = 0; i <= max; i++) {
        occurrences[i] = 0;
    }

    for (i = 0; i <= max; i++) {
        occurrences[array[i]]++;
    }

    for (i = 1; i <= max; i++) {
        occurrences[i] += occurrences[i - 1];
    }

    // sort
    for (i = array.length - 1; i >= 0; i--) {
        sorted[--occurrences[array[i]]] = array[i];
    }

    return sorted;
};

console.log(countingSort([1, 9, 3, 13, 3, 3, 12, 4, 7, 6, 6]))
