function isValid(s: string) {
    // Write your code here
    const charDic: Record<string,number> = {}
    for (let c of s) {
        charDic[c] ? charDic[c]++ : charDic[c] = 1
    }
    const freqs = new Set(Object.values(charDic))

    if (freqs.size === 1) return 'YES'
    if (freqs.size === 2) {
        const max = Math.max(...freqs)
        const min = Math.min(...freqs)
        let maxCt = 0
        let minCt = 0
        for (let c in charDic) {
            if (charDic[c] === max) maxCt++
            if (charDic[c] === min) minCt++
        }
        if (
            (minCt === 1 && min === 1) ||
            (maxCt === 1 && max === min + 1)
        ) return 'YES'
    }
    return 'NO'
}

console.log(isValid('abcdefghhgfedecba'))
