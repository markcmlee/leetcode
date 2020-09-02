// https://leetcode.com/problems/reverse-integer/

// const reverse = (x) => {
//   const split = x.toString().split("");
//   if (split[0] === "-") {
//     split.splice(0, 1);
//     return -Number(split.reverse().join(""));
//   }
//   return Number(split.reverse().join(""));
// };

const reverse = (x) => {
  const split = x.toString().split("");
  if (split[0] === "-") {
    split.shift();
    const negativeResult = -Number(split.reverse().join(""));
    return negativeResult < -(2 ** 31) ? 0 : negativeResult;
  }
  const result = Number(split.reverse().join(""));
  return result > 2 ** 31 - 1 ? 0 : result;
};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21

console.log(-(2 ** 31));
console.log(2 ** 31 - 1);
