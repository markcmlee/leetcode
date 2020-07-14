// https://leetcode.com/problems/shortest-unsorted-continuous-subArray/

const findUnsortedSubarray = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const subArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i]) {
      subArray.push(i);
    }
  }
  return nums.slice(Math.min(...subArray), Math.max(...subArray) + 1).length;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5
console.log(findUnsortedSubarray([1, 2, 3, 4])); // 0
console.log(findUnsortedSubarray([1, 2, 3, 3, 3])); // 0
console.log(findUnsortedSubarray([2, 1])); // 2
console.log(findUnsortedSubarray([5, 4, 3, 2, 1])); // 5
