// https://leetcode.com/problems/move-zeroes/submissions/

const moveZeroes = (nums) => {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== pointer) {
        nums[pointer] = nums[i];
        nums[i] = 0;
      }
      pointer++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
