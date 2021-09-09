function largestRectangle(h: number[]): number {
    // Write your code here
    let max = Number.MIN_VALUE;
    for (let index = 0; index < h.length; index++) {
        let left = index - 1;
        let right = index + 1;
        let block = 1;
        while (left > -1) {
            if (h[left] >= h[index])
                block++;
            else
                break;
            left--;
        }
        while (h.length > right) {
            if (h[right] >= h[index])
                block++;
            else
                break;
            right++;
        }
        if (block * h[index] > max) {
            max = block * h[index];
        }
        block = 1;
    }
    return max;
}

console.log(largestRectangle([1, 2, 3, 4, 5]))
