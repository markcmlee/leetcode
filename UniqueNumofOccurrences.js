// https://leetcode.com/problems/unique-number-of-occurrences/

const uniqueOccurences = (arr) => {
  const tally = {};
  arr.forEach((num) => (tally[num] ? (tally[num] += 1) : (tally[num] = 1)));
  console.log(Object.values(tally));
};

console.log(uniqueOccurences([1, 2, 2, 1, 1, 3])); //true
console.log(uniqueOccurences([1, 2])); //false
console.log(uniqueOccurences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); //true
