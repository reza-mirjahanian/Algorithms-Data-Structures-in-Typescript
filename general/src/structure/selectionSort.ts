console.log("###--  selectionSort  --###");

function selectionSort(arr: Array<number>) {
    for (let j = 0; j < arr.length; j++) {
        let min = Infinity, index = -1;
        for (let i = j; i < arr.length; i++) {
            if (Math.min(arr[i], min) === arr[i]) {
                min = arr[i];
                index = i;
            }
        }
        [arr[j], arr[index]] = [arr[index], arr[j]];
    }
    return arr
}


console.log(selectionSort([9, 5, 6, 7, 2, 4]));
