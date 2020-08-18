// https://leetcode.com/problems/fair-candy-swap/

const fairCandySwap = (A, B) => {
  // get sum of both arrays
  const aSum = A.reduce((a, b) => a + b);
  const bSum = B.reduce((a, b) => a + b);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === (aSum - bSum) / 2 + B[j]) {
        return [A[i], B[j]];
      }
    }
  }
};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));
console.log(fairCandySwap([1, 2, 5], [2, 4]));


aSum - A[i] + B[j] = bSum + A[i] - B[j]

B[j] - A[i] = bSum + A[i] - B[j] - aSum

-2A[i] = bsum - asum - 2B[j]

2A[i] = asum - bsum + 2B[j]

A[i] = (asum-bsum)/2 + B[j]