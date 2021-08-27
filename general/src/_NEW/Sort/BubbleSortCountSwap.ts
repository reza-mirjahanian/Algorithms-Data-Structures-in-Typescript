function countSwaps(a: number[]): void {
    // Write your code here
    let total = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < (a.length)- 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]] ;
                total++;
            }
        }
    }

    console.log(`Array is sorted in ${total} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

countSwaps([6,4,1])
