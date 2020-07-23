// https://leetcode.com/problems/unique-number-of-occurrences/

const uniqueOccurrences = (arr) => {
  const tally = {};
  arr.forEach((num) => (tally[num] ? (tally[num] += 1) : (tally[num] = 1)));
  return Object.values(tally).every(
    (a, b) => Object.values(tally).indexOf(a) === b
  );
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); //true
console.log(uniqueOccurrences([1, 2])); //false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); //true
