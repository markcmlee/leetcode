// https://leetcode.com/problems/shuffle-the-array/

const shuffle = (nums, n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};

// one-liner
const shuffle2 = (nums, n) => {
  return nums.map((num, i) =>
    i % 2 === 0 ? nums[i / 2] : nums[n + (i - 1) / 2]
  );
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); //[2, 3, 5, 4, 1, 7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); //[1, 4, 2, 3, 3, 2, 4, 1]
console.log(shuffle([1, 1, 2, 2], 2)); //[1, 2, 1, 2]
