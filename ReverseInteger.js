// https://leetcode.com/problems/reverse-integer/

const reverse = (x) => {
  const split = x.toString().split("");
  if (split[0] === "-") {
    split.splice(0, 1);
    return -Number(split.reverse().join(""));
  }
  return Number(split.reverse().join(""));
};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21
