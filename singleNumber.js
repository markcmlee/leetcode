// https://leetcode.com/problems/single-number/

const singleNumber = (nums) => {
  const tally = {};
  nums.forEach((num) => tally[num] ? tally[num]++ : tally[num] = 1);
  for (const key in tally) {
    if (tally[key] === 1) return key
  }
};

console.log(singleNumber([2, 2, 1])); //1
console.log(singleNumber([4, 1, 2, 1, 2])); //4