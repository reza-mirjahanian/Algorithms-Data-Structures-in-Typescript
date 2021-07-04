console.log("###--  insertionSort  --###");

function insertionSort(arr:Array<number>) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}


console.log(insertionSort([9,5,6,7,2,4]));
