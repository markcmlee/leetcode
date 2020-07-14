// https://leetcode.com/problems/find-lucky-integer-in-an-array/

const findLucky = (arr) => {
  const tally = {};
  arr.forEach((el) => (tally[el] ? (tally[el] += 1) : (tally[el] = 1)));
  let max = -Infinity;
  for (const key in tally) {
    if (tally[key] === Number(key)) {
      if (Number(key) > max) max = Number(key);
    }
  }
  return max === -Infinity ? -1 : max;
};

console.log(findLucky([2, 2, 3, 4])); // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 2, 3, 3])); // -1
console.log(findLucky([5])); // -1
console.log(findLucky([7, 7, 7, 7, 7, 7, 7])); // 7
