// https://leetcode.com/problems/self-dividing-numbers/solution/

const selfDividingNumbers = (left, right) => {
  const result = [];

  for (let i = left; i <= right; i++) {
    const number = i.toString().split("");
    let counter = 0;
    if (number.includes(0)) {
      continue;
    } else {
      let j = 0;
      while (j !== number.length) {
        if (i % number[j] === 0) {
          counter++;
        }
        if (counter === number.length) {
          result.push(i);
        }
        j++;
      }
    }
  }
  return result;
};

console.log(selfDividingNumbers(1, 22));
