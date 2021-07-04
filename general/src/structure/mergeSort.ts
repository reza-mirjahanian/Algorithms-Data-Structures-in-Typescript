console.log("###-- Merge Sort  --###");

function merge(arr1: Array<number>, arr2: Array<number>) {
    let newArr: Array<number> = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            let arr2Shift = arr2.shift();
            if (arr2Shift) {
                newArr.push(arr2Shift)
            }
        } else {
            let arr1Shift = arr1.shift();
            if (arr1Shift) {
                newArr.push(arr1Shift);
            }
        }
    }

    if (arr1.length) {
        newArr = newArr.concat(arr1)
    }

    if (arr2.length) {
        newArr = newArr.concat(arr2)
    }

    return newArr;
}

function mergeSort(arr: Array<number>) {
    if (arr.length === 1) return arr;

    let half = arr.length / 2;
    let l1 = arr.slice(0, half);
    let l2 = arr.slice(half, arr.length);

    l1 = mergeSort(l1);
    l2 = mergeSort(l2);

    return merge(l1, l2);
}

console.log(mergeSort([9, 5, 6, 7, 2, 4]));
