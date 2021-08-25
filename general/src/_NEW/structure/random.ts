import * as crypto from "crypto";
console.log("###-- Random --###");

//Math.random provides you with a random floating point number between range [0, 1)
function getRandom(floor: number, ceiling: number) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// For true randomness (entropy pool version) and security critical applications you need something like NodeJS crypto
// const token = crypto.randomBytes(64).toString('hex');
const token = crypto.randomBytes(4).readUInt32LE();
console.log(getRandom(10, 15));
console.log(crypto.randomInt(10, 15));

console.log({token});
