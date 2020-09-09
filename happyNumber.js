// https://leetcode.com/problems/happy-number/

const isHappy = (n) => {
  let result = n;
  const visited = {};
  const getDigits = number => `${number}`.split('').map(str => Number(str));

  while (result !== 1) {
    let digits = getDigits(result);
    result = digits.reduce((a, b) => a + Math.pow(b, 2), 0);
    if (visited[result] === undefined) visited[result] = true;
    else return false;
  }

  return true;
};

console.log(isHappy("19")); // true