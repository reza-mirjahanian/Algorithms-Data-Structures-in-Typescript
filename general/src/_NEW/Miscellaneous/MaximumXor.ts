// function maxXor(arr, queries) {
//     const BIT_LENGTH = 32;
//     let HASH_TABLE = {},
//         output = [],
//         switches = {
//             0: 1,
//             1: 0
//         },
//         neededBits = BIT_LENGTH;
//     for (let num of arr) {
//         let bin = num.toString(2).padStart(BIT_LENGTH, '0'),
//             node = HASH_TABLE;
//         for (let i = 0; i < BIT_LENGTH; i++) {
//             let bit = bin[i];
//             if (!node[bit]) {
//                 node[bit] = (i === BIT_LENGTH - 1) ? num : {};
//             }
//             node = node[bit];
//
//         }
//     }
//
//     while (!HASH_TABLE[1] || typeof HASH_TABLE === "number") {
//         HASH_TABLE = HASH_TABLE[0];
//         neededBits--;
//     }
//
//     for (let num of queries) {
//         let node = HASH_TABLE,
//             bin = num.toString(2).padStart(BIT_LENGTH, '0'),
//             u = BIT_LENGTH - neededBits;
//
//         while (typeof node !== "number") {
//             let current = bin[u],
//                 w = switches[current];
//             node =
//                 typeof node[w] === "undefined" ?
//                     node[current] :
//                     node[w];
//             u++;
//         }
//         output.push(node ^ num);
//     }
//     return output;
// }
