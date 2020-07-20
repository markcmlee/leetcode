// https://leetcode.com/problems/number-of-good-pairs/

// time: O(n^2)
// space: O(1)
const numIdenticalPairs = (nums) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      if (nums[i] === nums[j] && i < j) counter++;
    }
  }
  return counter;
};

// better time complexity
// time: O(n)
// space: O(n)
const numIdenticalPairs2 = (nums) => {
  const map = {};
  let counter = 0;
  nums.forEach((num) => {
    if (map[num]) {
      counter += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  });
  return counter;
};

// better space complexity
// time: O(nLogn)
// space: O(1)
const numIdenticalPairs3 = (nums) => {
  nums.sort();
  let totalCount = 0;
  let curCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      totalCount += curCount;
      curCount++;
    } else {
      curCount = 1;
    }
  }
  return totalCount;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); //4
console.log(numIdenticalPairs([1, 1, 1, 1])); //6
console.log(numIdenticalPairs([1, 2, 3])); //0
