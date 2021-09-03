function whatFlavors(cost: number[], money: number): void {
    // Write your code here
    const costHash: Record<number,number> = {};
    for(let i = 0; i < cost.length; i++) {
        costHash[cost[i]] = i+1;
    }

    for(let i = 0; i < cost.length; i++) {
        let diff = money - cost[i];
        if (i+1 == costHash[diff]) continue;
        if (costHash[diff]) {
            const res = costHash[diff] > i+1 ? `${i+1} ${costHash[diff]}` : `${costHash[diff]} ${i+1}`;
            console.log(res);

        }
    }
}

// whatFlavors([4,3,2,5,7], 8)
whatFlavors( [2, 2, 4, 3], 4)
