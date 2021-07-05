console.log("###--  Quick Sort  --###");

//Quicksort is a sorting algorithm based on the divide and conquer

//Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
// Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning.

function partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return i;
}


function quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
    let index;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }
    }

    return array;
}

console.log(quickSort([9, 5, 6, 7, 2, 4]));
