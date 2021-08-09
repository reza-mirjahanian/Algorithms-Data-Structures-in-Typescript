
function minimumBribes(q: number[]) {
  let swaps = 0;
  for (let i = 0; i < q.length; i++) {
    let bribes = q[i] - (i + 1)
    let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0
    if (bribes > 2) {
     console.log('Too chaotic')
        return
    }

    for (let j = maxAdvance; j < i; j++) {
      if (q[j] > q[i]) swaps++
    }

  }
  console.log(swaps)
}

function minimumBribes2(q:number[]) {
    let num = 0
    let isChaotic = false
    for(let i=q.length-1; i>=0; i--) {
        if(q[i]-i>3) isChaotic = true
        for(let j=q[i]-2;j<i;j++){
            if(q[j]>q[i]) num++
        }
    }
    if(isChaotic) console.log("Too chaotic")
    else console.log(num)
}

console.log(minimumBribes([2, 1, 5, 3, 4]))
console.log(minimumBribes2([2, 1, 5, 3, 4]))
//
console.log(minimumBribes([2, 5, 1, 3, 4]))
console.log(minimumBribes2([2, 5, 1, 3, 4]))
