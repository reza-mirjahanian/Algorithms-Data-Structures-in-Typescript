

function solution(input : number[]) {
    let max = -1;

    //helper
    const sumOfDigits = (val: number) => {
        let total = 0;
        while (val) {
            total += val % 10;
            val = Math.floor(val / 10);
        }
        return total;
    };

    const cache : Record<string, number>  = {};
    for (let number of input) {
        let total = sumOfDigits(number);
        if (total in cache) {
            let tmpMax = number + cache[total];
            if (tmpMax > max) {
                max = tmpMax;
            }
        } else {
            cache[total] = number;
        }
    }
    return max;
}

console.log(solution([51,17,71,42]))

