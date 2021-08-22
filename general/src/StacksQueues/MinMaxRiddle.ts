

function solve(arr: number[]) {
  // solve here
  const mMaxes : Record<string, number>= {}
  const mInver : Record<string, number>= {}
  const stack: [number,number][] = []
  const maxList = []
  arr.push(0)
  for (let i = 0; i < arr.length; i++) {
    let idx = i
    while (stack.length && stack[stack.length - 1][0] >= arr[i]) {
      let [val, prevIdx] = stack.pop() as [number,number]
      mMaxes[arr[i]] = Math.max(
          mMaxes[arr[i]] || 0, i - prevIdx + 1
      )
      mMaxes[val] = Math.max(mMaxes[val] || 0, i - prevIdx)
      idx = prevIdx
    }
    stack.push([arr[i], idx])
  }
  delete mMaxes['0']
  for (let k in mMaxes) {
    mInver[mMaxes[k]] = Math.max(mInver[mMaxes[k]] || 0, Number(k))
  }
  maxList.push(mInver[arr.length - 1])
  for (let i = arr.length - 2; i > 0; i--) {
    if (!mInver[i] || mInver[i] < maxList[maxList.length - 1]) {
      maxList.push(maxList[maxList.length - 1])
    } else {
      maxList.push(mInver[i])
    }
  }

  return maxList.reverse()
}

function solveSlow(arr: number[]) {
  let output = [];
  let temp = Array(arr.length);

  let maximumOfAllWindows = arr[0];
  temp[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    temp[i] = arr[i];
    maximumOfAllWindows = (maximumOfAllWindows < arr[i]) ? arr[i] : maximumOfAllWindows;
  }

  output.push(maximumOfAllWindows);

  for (let windowSize = 2; windowSize < arr.length + 1; windowSize++) {
    for (let i = 0; i < arr.length - windowSize + 1; i++) {
      let target = arr[i + windowSize - 1];
      temp[i] = (temp[i] > target) ? target : temp[i];

      if (i == 0) {
        maximumOfAllWindows = temp[i];
      } else {
        maximumOfAllWindows = (maximumOfAllWindows < temp[i]) ? temp[i] : maximumOfAllWindows;
      }
    }

    output.push(maximumOfAllWindows);
  }


  return output;
}

console.log(solve([1, 2, 3, 5, 1, 13, 3]));

function riddle(arr: number[], n: number) {
  const s = [] // Used to find previous and next smaller

  // Arrays to store previous and next smaller
  const left = []
  const right = []

  // Initialize elements of left[] and right[]
  for (let i = 0; i < n; i++) {
    left[i] = -1;
    right[i] = n;
  }

  // Fill elements of left[] (closer lower value on the left of i)
  for (let i = 0; i < n; i++) {
    while (s.length && arr[s[s.length - 1]] >= arr[i]) {
      s.pop()
    }

    if (s.length) {
      left[i] = s[s.length - 1]
    }

    s.push(i)
  }

  // Empty the stack as stack is going to be used for right[]
  while (s.length) {
    s.pop()
  }

  // Fill elements of right[] (closer lower value on the right of i)
  for (let i = n - 1; i >= 0; i--) {
    while (s.length && arr[s[s.length - 1]] >= arr[i]) {
      s.pop()
    }

    if (s.length) {
      right[i] = s[s.length - 1]
    }

    s.push(i)
  }

  // Create and initialize answer array
  const ans = []
  for (let i = 0; i <= n; i++) {
    ans[i] = 0
  }

  // Fill answer array by comparing minimums of all
  // lengths computed using left[] and right[]
  for (let i = 0; i < n; i++) {
    // length of the interval
    const len = right[i] - left[i] - 1;

    // arr[i] is a possible answer for this length
    // 'len' interval, check if arr[i] is more than
    // max for 'len'
    ans[len] = Math.max(ans[len], arr[i]);
  }

  // Some entries in ans[] may not be filled yet. Fill
  // them by taking values from right side of ans[]
  for (let i = n - 1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1])
  }

  ans.shift() // The first 0 is useless

  return ans
}
