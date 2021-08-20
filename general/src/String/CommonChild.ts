function commonChild(s1: string, s2: string) {
    // Write your code here
    const array = [Array(s2.length + 1).fill(0)]; // [[0,0,0,0]]

    [...s1].forEach((v1, i) => {
        array[i + 1] = [0];
        [...s2].forEach((v2, j) => {
            array[i + 1][j + 1] = v1 === v2 ? array[i][j] + 1 : Math.max(array[i + 1][j], array[i][j + 1]);
        });
    });
    return array[s2.length][s1.length];
}

console.log(commonChild('REZ','REZ'))
