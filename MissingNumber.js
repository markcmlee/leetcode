// https://leetcode.com/problems/missing-number/

const missingNumber = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[i]) return i;
  }
};

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
