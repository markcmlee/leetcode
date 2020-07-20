// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

const numberOfSteps = (num, counter = 0) => {
  if (num === 0) return counter;
  if (num % 2 === 0) {
    return numberOfSteps(num / 2, (counter += 1));
  }
  if (num % 2 !== 0) {
    return numberOfSteps(num - 1, (counter += 1));
  }
};

// Shorter Solution
const numberOfSteps2 = (num, counter = 0) => {
  if (num % 2 !== 0) return numberOfSteps2((num -= 1), (n += 1));
  return num > 1 ? numberOfSteps2((num /= 2), (n += 1)) : n;
};

console.log(numberOfSteps(14)); //6
console.log(numberOfSteps(8)); //4
console.log(numberOfSteps(123)); //12
