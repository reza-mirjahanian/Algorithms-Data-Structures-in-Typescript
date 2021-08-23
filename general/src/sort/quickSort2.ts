function quicksort(array: number[]) : number[] {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];

    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
}



console.log('Sorted array', quicksort([23, 45, 16, 37, 3, 99, 22]));
