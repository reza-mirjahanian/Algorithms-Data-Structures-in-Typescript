function alternatingCharacters(s: string) {
    // Write your code here
    let c = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            c++;
        }
    }

    return c;
}
