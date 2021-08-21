function isBalanced(s:string) {
    // Write your code here
    let brackets = "[]{}()<>"
    let stack = []

    for(let bracket of s) {
        let bracketsIndex = brackets.indexOf(bracket)

        if (bracketsIndex === -1){
            continue
        }

        if(bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
        } else {
            if(stack.pop() !== bracketsIndex) {
                return 'NO';
            }
        }
    }
    return stack.length === 0 ? 'YES': 'NO'
}

console.log(isBalanced('{{[[(())]]}}'))
