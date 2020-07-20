// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = (nums) => {
  // sort in descending order
  const sorted = Array.from(nums).sort((a, b) => b - a);
  // create a map with counts
  const map = new Map(sorted.map((num, i) => [num, nums.length - i - 1]));
  // return an array with counts stored in map
  return nums.map((num) => map.get(num));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); //[4, 0, 1, 1, 3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); //[2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); //[0, 0, 0, 0]
