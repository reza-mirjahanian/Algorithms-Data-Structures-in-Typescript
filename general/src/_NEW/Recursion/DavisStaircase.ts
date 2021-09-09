const map: Record<number,number> = {}
function stepPerms(n:number): number {
    // Write your code here
    if(n < 1)
        return 0;
    else if(n < 3)
        return n;
    else if(n == 3)
        return 4;
    else {
        if(map[n])
            return map[n];
        else
            return map[n] = (stepPerms(n-1) + stepPerms(n-2) + stepPerms(n-3));
    }
}


console.log(map)
