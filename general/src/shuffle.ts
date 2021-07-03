console.log("###-- Shuffling Array --###");
import {randomInt} from "crypto";

function shuffleInPlace<T>(array: T[]): T[] {
    let size = array.length;
    if (size <= 1) return array;

    for (let i = 0; i < size - 1; i++) {
        const randomIndex = randomInt(i, size - 1);
        //swapping
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let shuffledArray = shuffleInPlace<number>([...testArray]);
console.log(shuffledArray)
console.log(shuffledArray.length)

console.log('Method 2');

function shuffleSort<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
}

let shuffle2 = shuffleSort<number>([...testArray]);
console.log(shuffle2)
console.log(shuffle2.length)
