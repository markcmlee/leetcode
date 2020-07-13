// https://leetcode.com/problems/fair-candy-swap/

const fairCandySwap = (A, B) => {
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
