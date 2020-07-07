// https://leetcode.com/problems/move-zeroes/submissions/

// const moveZeroes = nums => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       nums.push(Number(nums.splice(i, 1).toString()));
//     }
//   }
//   return nums;
// };

const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(Number(nums.splice(i, 1).toString()));
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(Number(nums.splice(i, 1).toString()));
    }
  }
  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
