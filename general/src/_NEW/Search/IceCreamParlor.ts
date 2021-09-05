function whatFlavors(cost: number[], money: number): void {
    const costHash: Record<number,number> = {};
    for(let i = 0; i < cost.length; i++) {
        costHash[cost[i]] = i+1;
    }

    // j + 1 (for 1 zero index)
// costTable for duplicate price, keep latest.
    for(let j = 0; j < cost.length; j++) {
        let subtract = money - cost[j];
        if (j+1 == costHash[subtract]) {
            continue;
        }
        if (costHash[subtract]) {
            const res = costHash[subtract] > j+1 ? `${j+1} ${costHash[subtract]}` : `${costHash[subtract]} ${j+1}`;
            console.log(res);
           return  ;
        }
    }
}

// whatFlavors( [1 ,4 ,5, 3 ,2], 4)
whatFlavors( [2, 2, 4, 3], 4)
// whatFlavors( [2, 2, 2, 2], 4)
