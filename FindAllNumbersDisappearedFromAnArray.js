// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  const result = [];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== i) {
      if (sorted[i] !== sorted[i - 1] && sorted[i - 1] !== undefined) {
        result.push(i);
      }
    }
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
