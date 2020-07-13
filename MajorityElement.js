// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
  const tally = {};
  const numToBeat = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    tally[nums[i]] ? (tally[nums[i]] += 1) : (tally[nums[i]] = 1);
    if (tally[nums[i]] > numToBeat) return nums[i];
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
