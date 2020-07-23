// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

const sumZero = (n) => {
  const nums = Math.floor(n / 2);
  const result = [];
  for (let i = 1; i <= nums; i++) {
    result.push(i, -i);
  }
  if (n % 2 !== 0) result.push(0);
  return result;
};

console.log(sumZero(5)); //any array that adds up to 5
// console.log(sumZero(3)); //[-1, 0, 1]
// console.log(sumZero(1)); //[0]
